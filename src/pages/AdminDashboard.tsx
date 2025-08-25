import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Users, 
  DollarSign, 
  TrendingUp,
  Package,
  Eye,
  Edit,
  Trash2,
  Plus
} from "lucide-react";

// Mock data for admin dashboard
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    icon: DollarSign,
    trend: "up"
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+12.5%",
    icon: ShoppingBag,
    trend: "up"
  },
  {
    title: "Customers",
    value: "856",
    change: "+8.2%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Products",
    value: "89",
    change: "+3",
    icon: Package,
    trend: "up"
  }
];

const recentOrders = [
  { id: "ORD-001", customer: "John Doe", amount: "$299.99", status: "shipped", date: "2024-01-15" },
  { id: "ORD-002", customer: "Jane Smith", amount: "$199.99", status: "pending", date: "2024-01-15" },
  { id: "ORD-003", customer: "Bob Johnson", amount: "$899.99", status: "delivered", date: "2024-01-14" },
  { id: "ORD-004", customer: "Alice Brown", amount: "$149.99", status: "shipped", date: "2024-01-14" },
];

const products = [
  { id: "1", name: "Premium Wireless Headphones", price: "$299.99", stock: 45, status: "active" },
  { id: "2", name: "Smart Fitness Watch", price: "$199.99", stock: 23, status: "active" },
  { id: "3", name: "Ultra-Slim Laptop", price: "$1,299.99", stock: 12, status: "active" },
  { id: "4", name: "Professional Camera", price: "$899.99", stock: 0, status: "out_of_stock" },
];

const AdminDashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped": return "bg-blue-500";
      case "pending": return "bg-yellow-500";
      case "delivered": return "bg-green-500";
      case "active": return "bg-green-500";
      case "out_of_stock": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Admin Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
                VelocityStore Admin
              </h1>
              <Badge variant="secondary">Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Store
              </Button>
              <Button variant="ghost" size="sm">
                Admin User
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="card-hover">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    Latest orders from your customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <Badge variant="outline" className={`${getStatusColor(order.status)} text-white`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    Best performing products this month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.slice(0, 4).map((product) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Stock: {product.stock} units
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Orders Management</CardTitle>
                  <CardDescription>
                    Manage all customer orders
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.customer}</p>
                          </div>
                          <Badge variant="outline" className={`${getStatusColor(order.status)} text-white`}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Product Management</CardTitle>
                  <CardDescription>
                    Manage your product catalog
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Stock: {product.stock} units
                            </p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${getStatusColor(product.status)} text-white`}
                          >
                            {product.status.replace("_", " ")}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-medium">{product.price}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  View and manage customer accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    Customer management features will be available once you connect to Supabase
                  </p>
                  <Button variant="outline">
                    Connect Supabase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;