
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FaceIdSuccessProps {
  onContinue: () => void;
}

const FaceIdSuccess = ({ onContinue }: FaceIdSuccessProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Face ID</h1>
        </div>

        {/* Success Message */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-eclat-navy dark:text-white">Face ID Captured</h2>
          <p className="text-gray-600 dark:text-eclat-blue text-lg">
            Your face ID has been successfully captured. Here are your details.
          </p>
        </div>

        {/* Captured Face */}
        <div className="flex justify-center my-8">
          <div className="w-80 h-96 bg-gray-300 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/c84dd82d-857f-417f-be99-ba0102c8b22a.png" 
              alt="Face ID captured" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Customer ID */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-eclat-navy dark:text-white">Customer ID</p>
          <p className="text-lg font-bold text-eclat-navy dark:text-white">1234567890</p>
        </div>

        {/* Continue Button */}
        <Button 
          className="w-full py-4 bg-eclat-gray hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-eclat-navy dark:text-white font-semibold rounded-2xl text-lg"
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </ScrollArea>
  );
};

export default FaceIdSuccess;
