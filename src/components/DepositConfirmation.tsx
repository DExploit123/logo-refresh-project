
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

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
          className="text-eclat-navy"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold text-eclat-navy">Deposit Confirmation</h1>
      </div>

      {/* Success Message */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-eclat-navy">Deposit Successful</h2>
      </div>

      {/* Success Icon */}
      <div className="flex justify-center my-8">
        <div className="w-80 h-48 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <Check className="w-16 h-16 text-green-600" strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy">Transaction ID</p>
          <p className="text-lg font-bold text-eclat-navy">{transactionId}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy">Amount</p>
          <p className="text-lg font-bold text-eclat-navy">${amount}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy">Date</p>
          <p className="text-lg font-bold text-eclat-navy">{date}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy">Time</p>
          <p className="text-lg font-bold text-eclat-navy">{time}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="text-lg text-eclat-navy">Agent</p>
          <p className="text-lg font-bold text-eclat-navy">Agent Alex</p>
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
