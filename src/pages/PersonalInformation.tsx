import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
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
              onClick={() => navigate("/agent-profile")}
              className="text-eclat-navy dark:text-eclat-orange"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Biodata</h1>
            <div className="w-10" /> {/* Spacer for center alignment */}
          </div>

          <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
            <div className="space-y-8 pb-6">
              {/* Profile Section */}
              <div className="text-center space-y-4">
                {/* Profile Picture */}
                <div className="flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
                    <img 
                      src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
                      alt="Agent Alex" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Agent Details */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-eclat-navy dark:text-white">Agent Alex</h2>
                  <p className="text-gray-600 dark:text-eclat-blue text-base">Agent ID: 123456</p>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-eclat-navy dark:text-white">Personal Information</h3>
                
                <div className="space-y-6">
                  {/* Full Name */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Full Name</span>
                    <span className="text-eclat-navy dark:text-white font-medium">Agent Alex</span>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Date of Birth</span>
                    <span className="text-eclat-navy dark:text-white font-medium">1990-05-15</span>
                  </div>

                  {/* Gender */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Gender</span>
                    <span className="text-eclat-navy dark:text-white font-medium">Male</span>
                  </div>

                  {/* Home Address */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Home Address</span>
                    <span className="text-eclat-navy dark:text-white font-medium text-right">123 Main Street, Lagos, Nigeria</span>
                  </div>

                  {/* Phone Number */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Phone Number</span>
                    <span className="text-eclat-navy dark:text-white font-medium">+234 812 345 6789</span>
                  </div>

                  {/* Email Address */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Email Address</span>
                    <span className="text-eclat-navy dark:text-white font-medium">agent.alex@eclatpay.com</span>
                  </div>
                </div>
              </div>

              {/* Other Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-eclat-navy dark:text-white">Other Information</h3>
                
                <div className="space-y-6">
                  {/* National ID */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">National ID</span>
                    <span className="text-eclat-navy dark:text-white font-medium">12345678901</span>
                  </div>

                  {/* Registration Date */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Registration Date</span>
                    <span className="text-eclat-navy dark:text-white font-medium">2022-03-15</span>
                  </div>

                  {/* Last Login */}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-eclat-blue">Last Login</span>
                    <span className="text-eclat-navy dark:text-white font-medium">2024-12-28 10:30 AM</span>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <div className="pt-8">
                <Button 
                  className="w-full py-4 bg-eclat-blue hover:bg-blue-600 text-white font-semibold rounded-2xl text-lg"
                >
                  Edit Biodata
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
