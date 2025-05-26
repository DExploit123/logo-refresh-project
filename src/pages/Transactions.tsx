
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate("/home")}
                className="text-eclat-navy"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <img 
                src="/lovable-uploads/0775d6cd-3ea4-458f-bab9-1c51aeaf7c8e.png" 
                alt="EclatPay" 
                className="w-8 h-8 cursor-pointer"
                onClick={() => navigate("/home")}
              />
              <h1 className="text-2xl font-bold text-eclat-navy">Transactions</h1>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-eclat-navy"
              onClick={() => navigate("/settings")}
            >
              <Settings className="w-6 h-6" />
            </Button>
          </div>

          {/* Transaction History Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-eclat-navy">Transaction History</h2>
            
            <div className="space-y-3">
              {transactionHistory.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={transaction.avatar} />
                      <AvatarFallback className="bg-eclat-orange text-white">
                        {transaction.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-eclat-navy">{transaction.name}</p>
                      <p className="text-sm text-eclat-blue">{transaction.type}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
