
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BankAccounts = () => {
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
            <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Bank Accounts</h1>
            <div className="w-10" /> {/* Spacer for center alignment */}
          </div>

          <ScrollArea className="h-[calc(100vh-16rem)] pr-4">
            <div className="space-y-8 pb-6">
              {/* Bank Accounts Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-eclat-navy dark:text-white">Bank Accounts</h3>
                
                <div className="space-y-4">
                  {/* Checking Account */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                        <div className="text-2xl">🏛️</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-eclat-navy dark:text-white">Checking Account</h4>
                        <p className="text-gray-600 dark:text-eclat-blue">Bank of America</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 dark:text-eclat-blue hover:text-eclat-navy dark:hover:text-white"
                    >
                      <Edit className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Savings Account */}
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                        <div className="text-2xl">🏛️</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-eclat-navy dark:text-white">Savings Account</h4>
                        <p className="text-gray-600 dark:text-eclat-blue">Chase Bank</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-400 dark:text-eclat-blue hover:text-eclat-navy dark:hover:text-white"
                    >
                      <Edit className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Add Bank Account Button */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md px-6">
            <Button 
              className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl text-lg shadow-lg"
            >
              Add Bank Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;
