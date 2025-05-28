
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
              className="text-eclat-navy dark:text-eclat-orange"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div className="flex items-center justify-center flex-1">
              <img 
                src="/lovable-uploads/9ebaef5e-903a-4293-9279-88291c159f57.png" 
                alt="EclatPay" 
                className="h-12 cursor-pointer"
                onClick={() => navigate("/home")}
              />
            </div>
            <Button variant="ghost" size="icon" className="text-eclat-navy dark:text-eclat-orange">
              <SettingsIcon className="w-6 h-6" />
            </Button>
          </div>

          <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
            <div className="space-y-6 pb-6">
              <h2 className="text-xl font-bold text-eclat-navy dark:text-eclat-orange">App Preferences</h2>
              
              <div className="space-y-4">
                {/* Theme Setting */}
                <div 
                  className="flex items-center justify-between py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-4 rounded-lg transition-colors"
                  onClick={toggleTheme}
                >
                  <div className="flex items-center gap-3">
                    {isDarkMode ? <Moon className="w-5 h-5 text-eclat-navy dark:text-eclat-orange" /> : <Sun className="w-5 h-5 text-eclat-navy dark:text-eclat-orange" />}
                    <span className="text-eclat-navy dark:text-white font-medium">Theme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 dark:text-eclat-blue">{isDarkMode ? 'Dark' : 'Light'}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 dark:text-eclat-blue" />
                  </div>
                </div>
                
                {/* Language Setting */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-eclat-navy dark:text-white font-medium">Language</span>
                  <span className="text-gray-600 dark:text-eclat-blue">English</span>
                </div>
              </div>

              {/* Profile Management Section */}
              <h2 className="text-xl font-bold text-eclat-navy dark:text-eclat-orange mt-8">Profile Management</h2>
              
              <div className="space-y-4">
                {/* Agent Profile */}
                <div 
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => navigate("/agent-profile")}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" />
                      <AvatarFallback className="bg-eclat-orange text-white">AP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-eclat-navy dark:text-white">Agent Profile</p>
                      <p className="text-sm text-gray-500 dark:text-eclat-blue">Agent ID: 12345</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 dark:text-eclat-blue" />
                </div>

                {/* Change Password */}
                <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-eclat-navy dark:text-white font-medium">Change Password</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 dark:text-eclat-blue" />
                </div>

                {/* Notifications */}
                <div className="flex items-center justify-between py-4">
                  <span className="text-eclat-navy dark:text-white font-medium">Notifications</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 dark:text-eclat-blue" />
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
