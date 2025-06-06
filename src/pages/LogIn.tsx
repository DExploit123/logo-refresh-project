
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if fields are empty
    if (!username.trim() || !password.trim()) {
      alert("Please fill in both username and password fields.");
      return;
    }
    
    // For now, just navigate to the main app
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/")}
              className="text-eclat-navy dark:text-eclat-orange"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Log in</h1>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/9ebaef5e-903a-4293-9279-88291c159f57.png" 
              alt="EclatPay" 
              className="h-16"
            />
          </div>

          {/* Welcome Section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-eclat-navy dark:text-white">Welcome back</h2>
            <p className="text-gray-600 dark:text-eclat-blue text-lg">
              Enter your username and password to log in to your account.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <Input 
              placeholder="Username" 
              className="py-4 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl text-lg placeholder:text-gray-500 dark:placeholder:text-eclat-blue dark:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <Input 
              type="password"
              placeholder="Password" 
              className="py-4 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl text-lg placeholder:text-gray-500 dark:placeholder:text-eclat-blue dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button 
              className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl text-lg mt-8"
              onClick={handleLogin}
            >
              Log in
            </Button>

            {/* Sign up link */}
            <div className="text-center mt-8">
              <Button 
                variant="link" 
                className="text-eclat-blue underline"
                onClick={() => navigate("/")}
              >
                Don't have an account? Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
