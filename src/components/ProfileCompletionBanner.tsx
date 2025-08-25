import { useState, useEffect } from "react";
import { X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const ProfileCompletionBanner = () => {
  const { user } = useAuth();
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (user && !dismissed) {
      checkProfileCompletion();
    }
  }, [user, dismissed]);

  const checkProfileCompletion = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('profile_completed, full_name, phone, address, city, postal_code, country')
        .eq('id', user?.id)
        .single();

      if (error) throw error;

      // Check if profile is incomplete or if profile_completed flag is false
      const isIncomplete = !data.profile_completed || 
        !data.full_name || 
        !data.phone || 
        !data.address || 
        !data.city || 
        !data.postal_code || 
        !data.country;

      setShowBanner(isIncomplete);
    } catch (error) {
      console.error('Error checking profile completion:', error);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShowBanner(false);
  };

  if (!showBanner || !user) {
    return null;
  }

  return (
    <Card className="mx-4 sm:mx-6 lg:mx-8 mt-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Complete Your Profile</h3>
            <p className="text-sm text-muted-foreground">
              Add your details to get personalized recommendations and faster checkout
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button asChild variant="default" size="sm" className="btn-shadow">
            <Link to="/profile">
              Complete Profile
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCompletionBanner;