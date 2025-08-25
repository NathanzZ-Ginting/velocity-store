-- Create enum for user roles
CREATE TYPE public.user_role AS ENUM ('customer', 'admin');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role user_role NOT NULL DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  category_id UUID REFERENCES public.categories(id),
  image_urls TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  total_price DECIMAL(10,2) NOT NULL CHECK (total_price >= 0),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  shipping_address JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create order_items table
CREATE TABLE public.order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS user_role
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = user_id;
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for categories (public read, admin write)
CREATE POLICY "Categories are viewable by everyone" ON public.categories
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage categories" ON public.categories
  FOR ALL USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for products (public read, admin write)
CREATE POLICY "Products are viewable by everyone" ON public.products
  FOR SELECT USING (is_active = true OR public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can manage products" ON public.products
  FOR ALL USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for orders (users see own, admins see all)
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own orders" ON public.orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all orders" ON public.orders
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

CREATE POLICY "Admins can update orders" ON public.orders
  FOR UPDATE USING (public.get_user_role(auth.uid()) = 'admin');

-- RLS Policies for order_items (linked to orders)
CREATE POLICY "Users can view their order items" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders 
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create order items for their orders" ON public.order_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders 
      WHERE orders.id = order_items.order_id 
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all order items" ON public.order_items
  FOR SELECT USING (public.get_user_role(auth.uid()) = 'admin');

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'customer'
  );
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample categories
INSERT INTO public.categories (name, description) VALUES
  ('Electronics', 'Electronic devices and gadgets'),
  ('Clothing', 'Fashion and apparel'),
  ('Books', 'Books and literature'),
  ('Home & Garden', 'Home improvement and garden supplies'),
  ('Sports', 'Sports equipment and accessories');

-- Insert sample products
INSERT INTO public.products (name, description, price, stock, category_id, image_urls) VALUES
  ('Premium Wireless Headphones', 'High-quality wireless headphones with noise cancellation', 299.99, 50, (SELECT id FROM public.categories WHERE name = 'Electronics'), ARRAY['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500']),
  ('Smart Fitness Watch', 'Advanced fitness tracking with heart rate monitor', 199.99, 30, (SELECT id FROM public.categories WHERE name = 'Electronics'), ARRAY['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500']),
  ('Classic Denim Jacket', 'Timeless denim jacket for all seasons', 89.99, 25, (SELECT id FROM public.categories WHERE name = 'Clothing'), ARRAY['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500']),
  ('Professional Camera', 'DSLR camera for professional photography', 899.99, 15, (SELECT id FROM public.categories WHERE name = 'Electronics'), ARRAY['https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500']);

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) VALUES ('product-images', 'product-images', true);

-- Storage policies for product images
CREATE POLICY "Product images are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'product-images');

CREATE POLICY "Admins can upload product images" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'product-images' 
    AND public.get_user_role(auth.uid()) = 'admin'
  );

CREATE POLICY "Admins can update product images" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'product-images' 
    AND public.get_user_role(auth.uid()) = 'admin'
  );

CREATE POLICY "Admins can delete product images" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'product-images' 
    AND public.get_user_role(auth.uid()) = 'admin'
  );