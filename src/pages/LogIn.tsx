
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
              className="text-eclat-navy dark:text-gray-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-2xl font-bold text-eclat-navy dark:text-gray-100">Log in</h1>
          </div>

          {/* Welcome Section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold text-eclat-navy dark:text-gray-100">Welcome back</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Enter your username and password to log in to your account.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <Input 
              placeholder="Username" 
              className="py-4 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:text-gray-100"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
            <Input 
              type="password"
              placeholder="Password" 
              className="py-4 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:text-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
              className="w-full py-4 bg-eclat-gray dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-eclat-navy dark:text-gray-100 font-semibold rounded-2xl text-lg mt-8"
              onClick={handleLogin}
            >
              Log in
            </Button>

            {/* Sign up link */}
            <div className="text-center mt-8">
              <Button 
                variant="link" 
                className="text-eclat-blue dark:text-blue-400 underline"
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
