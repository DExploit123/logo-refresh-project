
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface DepositConfirmationProps {
  onBack: () => void;
  onDone: () => void;
  amount: string;
  customerName: string;
}

const DepositConfirmation = ({ onBack, onDone, amount, customerName }: DepositConfirmationProps) => {
  // Generate a random transaction ID
  const transactionId = `TXN${Math.floor(Math.random() * 10000000000)}`;
  
  // Get current date and time
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const time = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack}
          className="text-eclat-navy dark:text-eclat-orange"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Deposit Confirmation</h1>
      </div>

      {/* Success Message */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-eclat-navy dark:text-white">Deposit Successful</h2>
      </div>

      {/* Amount Display - Prominent */}
      <div className="flex justify-center my-8">
        <div className="w-80 h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-700 rounded-3xl flex flex-col items-center justify-center">
          <p className="text-lg text-green-800 dark:text-green-200 font-medium mb-2">Amount Saved</p>
          <p className="text-6xl font-bold text-green-800 dark:text-green-100">${amount}</p>
          <p className="text-lg text-green-700 dark:text-green-300 mt-2">Successfully deposited</p>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy dark:text-eclat-blue">Transaction ID</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">{transactionId}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy dark:text-eclat-blue">Customer</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">{customerName}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy dark:text-eclat-blue">Date</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">{date}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy dark:text-eclat-blue">Time</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">{time}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy dark:text-eclat-blue">Agent</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">Agent Alex</p>
        </div>
      </div>

      {/* Done Button */}
      <Button 
        className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg text-lg"
        onClick={onDone}
      >
        Done
      </Button>
    </div>
  );
};

export default DepositConfirmation;
