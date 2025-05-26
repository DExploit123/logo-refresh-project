
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface NewDepositProps {
  onBack: () => void;
  onSubmit: (amount: string) => void;
  customerName: string;
}

const NewDeposit = ({ onBack, onSubmit, customerName }: NewDepositProps) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (amount.trim()) {
      onSubmit(amount);
    }
  };

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
        <h1 className="text-2xl font-bold text-eclat-navy">New Deposit</h1>
      </div>

      {/* Customer Info */}
      <div className="text-center">
        <p className="text-lg text-eclat-navy">For: {customerName}</p>
      </div>

      {/* Amount Input */}
      <div className="space-y-4">
        <Input 
          placeholder="Enter amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="py-6 text-lg bg-eclat-gray border-0 rounded-xl text-center"
        />
      </div>

      {/* Submit Button */}
      <Button 
        className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg text-lg"
        onClick={handleSubmit}
        disabled={!amount.trim()}
      >
        Submit
      </Button>
    </div>
  );
};

export default NewDeposit;
