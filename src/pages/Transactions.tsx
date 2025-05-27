
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const [currentView, setCurrentView] = useState("transactions");
  const navigate = useNavigate();

  const transactionHistory = [
    { name: "Ava Thompson", type: "Deposit", amount: "+$50", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Noah Parker", type: "Withdrawal", amount: "-$25", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Isabella Reed", type: "Deposit", amount: "+$75", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Liam Foster", type: "Withdrawal", amount: "-$30", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Mia Harper", type: "Deposit", amount: "+$60", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Jackson Cole", type: "Withdrawal", amount: "-$45", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" }
  ];

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
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-eclat-navy dark:text-eclat-orange"
              onClick={() => navigate("/settings")}
            >
              <Settings className="w-6 h-6" />
            </Button>
          </div>

          {/* Transaction History Section */}
          <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
            <div className="space-y-6 pb-6">
              <h2 className="text-xl font-bold text-eclat-navy dark:text-eclat-orange">Transaction History</h2>
              
              <div className="space-y-3">
                {transactionHistory.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={transaction.avatar} />
                        <AvatarFallback className="bg-eclat-orange text-white">
                          {transaction.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-eclat-navy dark:text-white">{transaction.name}</p>
                        <p className="text-sm text-eclat-blue dark:text-eclat-blue">{transaction.type}</p>
                      </div>
                    </div>
                    <p className={`font-bold ${transaction.amount.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
