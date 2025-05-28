
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgentProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/settings")}
              className="text-eclat-navy dark:text-eclat-orange"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Profile</h1>
            <div className="w-10" /> {/* Spacer for center alignment */}
          </div>

          <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
            <div className="space-y-8 pb-6">
              {/* Profile Section */}
              <div className="text-center space-y-4">
                {/* Profile Picture */}
                <div className="flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden bg-eclat-orange">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                      alt="Agent Alex" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Agent Details */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-eclat-navy dark:text-white">Agent Alex</h2>
                  <p className="text-eclat-blue dark:text-eclat-blue text-lg">Agent ID: 123456</p>
                  <p className="text-eclat-blue dark:text-eclat-blue text-lg">Joined 2 years ago</p>
                </div>
              </div>

              {/* Account Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-eclat-navy dark:text-white">Account</h3>
                
                <div className="space-y-4">
                  <div 
                    className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-4 rounded-lg transition-colors"
                    onClick={() => navigate("/personal-information")}
                  >
                    <span className="text-eclat-navy dark:text-white font-medium text-lg">Personal Information</span>
                    <ChevronRight className="w-6 h-6 text-gray-400 dark:text-eclat-blue" />
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-eclat-navy dark:text-white font-medium text-lg">Bank Details</span>
                    <ChevronRight className="w-6 h-6 text-gray-400 dark:text-eclat-blue" />
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-eclat-navy dark:text-white font-medium text-lg">Change Password</span>
                    <ChevronRight className="w-6 h-6 text-gray-400 dark:text-eclat-blue" />
                  </div>
                </div>
              </div>

              {/* Support Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-eclat-navy dark:text-white">Support</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-eclat-navy dark:text-white font-medium text-lg">Help Center</span>
                    <ChevronRight className="w-6 h-6 text-gray-400 dark:text-eclat-blue" />
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-eclat-navy dark:text-white font-medium text-lg">Contact Us</span>
                    <ChevronRight className="w-6 h-6 text-gray-400 dark:text-eclat-blue" />
                  </div>
                </div>
              </div>

              {/* Log Out Button */}
              <div className="pt-8">
                <Button 
                  className="w-full py-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-eclat-navy dark:text-white font-semibold rounded-2xl text-lg"
                  onClick={() => navigate("/")}
                >
                  Log Out
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
