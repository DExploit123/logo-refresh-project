
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";

interface FaceIdCaptureProps {
  onBack: () => void;
  onCapture: () => void;
}

const FaceIdCapture = ({ onBack, onCapture }: FaceIdCaptureProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
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
          <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Face ID</h1>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-eclat-navy dark:text-white">Position your face in the frame</h2>
          <p className="text-gray-600 dark:text-eclat-blue text-lg">
            Make sure your face is clearly visible and well-lit.
          </p>
        </div>

        {/* Face Capture Frame */}
        <div className="flex justify-center my-8">
          <div className="w-80 h-96 bg-gray-300 rounded-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/c89522f7-1a74-4141-9648-95434fa7a943.png" 
              alt="Face ID capture frame" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Capture Button */}
        <Button 
          className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg text-lg"
          onClick={onCapture}
        >
          Capture
        </Button>
      </div>
    </ScrollArea>
  );
};

export default FaceIdCapture;
