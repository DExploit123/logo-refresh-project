
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col justify-center p-6">
        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-80 h-64 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center">
              <div className="text-6xl">💰</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-eclat-navy">Welcome to Savings App</h1>
            <p className="text-gray-600 text-lg">
              Manage your savings and help others achieve their financial goals.
            </p>
          </div>

          {/* Sign In Button */}
          <Button 
            className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg text-lg"
            onClick={() => navigate("/login")}
          >
            Sign In
          </Button>

          {/* Terms */}
          <p className="text-sm text-eclat-blue mt-8">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
