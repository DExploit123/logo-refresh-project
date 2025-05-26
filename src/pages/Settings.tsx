
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings as SettingsIcon, ChevronRight } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/0775d6cd-3ea4-458f-bab9-1c51aeaf7c8e.png" 
                alt="EclatPay" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-eclat-navy">Settings</h1>
            </div>
            <Button variant="ghost" size="icon" className="text-eclat-navy">
              <SettingsIcon className="w-6 h-6" />
            </Button>
          </div>

          {/* App Preferences Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-eclat-navy">App Preferences</h2>
            
            <div className="space-y-4">
              {/* Theme Setting */}
              <div className="flex items-center justify-between py-4">
                <span className="text-eclat-navy font-medium">Theme</span>
                <span className="text-gray-600">Light</span>
              </div>
              
              {/* Language Setting */}
              <div className="flex items-center justify-between py-4">
                <span className="text-eclat-navy font-medium">Language</span>
                <span className="text-gray-600">English</span>
              </div>
            </div>

            {/* Profile Management Section */}
            <h2 className="text-xl font-bold text-eclat-navy mt-8">Profile Management</h2>
            
            <div className="space-y-4">
              {/* Agent Profile */}
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" />
                    <AvatarFallback className="bg-eclat-orange text-white">AP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-eclat-navy">Agent Profile</p>
                    <p className="text-sm text-gray-500">Agent ID: 12345</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Change Password */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-eclat-navy font-medium">Change Password</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between py-4">
                <span className="text-eclat-navy font-medium">Notifications</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
