
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings as SettingsIcon, ChevronRight, ArrowLeft, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/home")}
              className="text-eclat-navy dark:text-gray-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="flex items-center justify-center flex-1">
              <img 
                src="/lovable-uploads/0775d6cd-3ea4-458f-bab9-1c51aeaf7c8e.png" 
                alt="EclatPay" 
                className="w-10 h-10 cursor-pointer"
                onClick={() => navigate("/home")}
                style={{ filter: 'brightness(0) saturate(100%) invert(12%) sepia(77%) saturate(1075%) hue-rotate(200deg) brightness(96%) contrast(95%)' }}
              />
            </div>
            <Button variant="ghost" size="icon" className="text-eclat-navy dark:text-gray-300">
              <SettingsIcon className="w-6 h-6" />
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-10rem)]">
            <div className="space-y-6 pb-6">
              <h2 className="text-xl font-bold text-eclat-navy dark:text-gray-100">App Preferences</h2>
              
              <div className="space-y-4">
                {/* Theme Setting */}
                <div 
                  className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-4 rounded-lg transition-colors"
                  onClick={toggleTheme}
                >
                  <div className="flex items-center gap-3">
                    {isDarkMode ? <Moon className="w-5 h-5 text-eclat-navy dark:text-gray-300" /> : <Sun className="w-5 h-5 text-eclat-navy dark:text-gray-300" />}
                    <span className="text-eclat-navy dark:text-gray-100 font-medium">Theme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-gray-400">{isDarkMode ? 'Dark' : 'Light'}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                
                {/* Language Setting */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-eclat-navy dark:text-gray-100 font-medium">Language</span>
                  <span className="text-gray-600 dark:text-gray-400">English</span>
                </div>
              </div>

              {/* Profile Management Section */}
              <h2 className="text-xl font-bold text-eclat-navy dark:text-gray-100 mt-8">Profile Management</h2>
              
              <div className="space-y-4">
                {/* Agent Profile */}
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" />
                      <AvatarFallback className="bg-eclat-orange text-white">AP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-eclat-navy dark:text-gray-100">Agent Profile</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Agent ID: 12345</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Change Password */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-eclat-navy dark:text-gray-100 font-medium">Change Password</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-eclat-navy dark:text-gray-100 font-medium">Notifications</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Settings;
