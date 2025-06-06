import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Home, 
  Users, 
  CreditCard, 
  Settings, 
  Search, 
  Plus,
  ArrowLeft,
  RefreshCw,
  DollarSign,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import FaceIdCapture from "../components/FaceIdCapture";
import FaceIdSuccess from "../components/FaceIdSuccess";
import NewDeposit from "../components/NewDeposit";
import DepositConfirmation from "../components/DepositConfirmation";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");
  const [unsyncedEntries] = useState(3);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [newCustomerForm, setNewCustomerForm] = useState({
    fullName: "",
    phoneNumber: "",
    address: ""
  });
  const navigate = useNavigate();

  const customers = [
    { id: 125, name: "Sophia Carter", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { id: 98765, name: "Ethan Bennett", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { id: 54321, name: "Olivia Hayes", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" }
  ];

  const recentTransactions = [
    { name: "Sophia Carter", type: "Deposit", amount: "+$50", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Ethan Bennett", type: "Withdrawal", amount: "-$25", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" },
    { name: "Olivia Hayes", type: "Deposit", amount: "+$75", avatar: "/lovable-uploads/bcc25c9e-d6ab-43c8-8ef2-a84077c6cc5f.png" }
  ];

  const unsyncedData = [
    { type: "Savings Deposit", time: "10:30 AM" },
    { type: "Savings Withdrawal", time: "11:45 AM" },
    { type: "Savings Deposit", time: "02:15 PM" }
  ];

  const handleNewCustomerRegistration = () => {
    // Validate all fields are filled
    if (!newCustomerForm.fullName.trim() || !newCustomerForm.phoneNumber.trim() || !newCustomerForm.address.trim()) {
      alert("Please fill in all fields before registering.");
      return;
    }
    
    if (!faceIdEnabled) {
      alert("Face ID must be enabled to register a new customer.");
      return;
    }
    
    setCurrentView("faceIdCapture");
  };

  const handleFormChange = (field: string, value: string) => {
    setNewCustomerForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderHomeView = () => (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between">
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

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 bg-gradient-to-br from-eclat-gray to-white dark:from-gray-800 dark:to-gray-700 border-0 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-eclat-blue font-medium">Total Customers</p>
              <p className="text-3xl font-bold text-eclat-navy dark:text-eclat-orange">125</p>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-eclat-gray to-white dark:from-gray-800 dark:to-gray-700 border-0 shadow-sm">
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-eclat-blue font-medium">Unsynced Entries</p>
              <p className="text-3xl font-bold text-eclat-navy dark:text-eclat-orange">{unsyncedEntries}</p>
            </div>
          </Card>
        </div>

        {/* Sync Button */}
        <Button 
          className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg"
          onClick={() => setCurrentView("unsynced")}
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Sync Now
        </Button>

        {/* Recent Transactions */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-eclat-navy dark:text-eclat-orange">Recent Transactions</h2>
          <div className="space-y-3">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={transaction.avatar} />
                    <AvatarFallback className="bg-eclat-blue text-white">
                      {transaction.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-eclat-navy dark:text-white">{transaction.name}</p>
                    <p className="text-sm text-gray-500 dark:text-eclat-blue">{transaction.type}</p>
                  </div>
                </div>
                <p className={`font-bold ${transaction.amount.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  const renderCustomersView = () => (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Customers</h1>
          <Button 
            size="icon" 
            className="bg-eclat-blue hover:bg-blue-600 text-white rounded-full"
            onClick={() => setCurrentView("newCustomer")}
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-eclat-blue w-5 h-5" />
          <Input 
            placeholder="Search customers" 
            className="pl-10 py-3 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl dark:text-white dark:placeholder:text-eclat-blue"
          />
        </div>

        {/* Customer List */}
        <div className="space-y-3">
          {customers.map((customer) => (
            <div 
              key={customer.id} 
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSelectedCustomer(customer);
                setCurrentView("customerDetails");
              }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={customer.avatar} />
                  <AvatarFallback className="bg-eclat-orange text-white">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-eclat-navy dark:text-white">{customer.name}</p>
                  <p className="text-sm text-eclat-blue">ID: {customer.id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );

  const renderUnsyncedView = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCurrentView("home")}
          className="text-eclat-navy dark:text-eclat-orange"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Unsynced Entries</h1>
      </div>

      {/* Unsynced Items */}
      <div className="space-y-3">
        {unsyncedData.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
            <div className="w-12 h-12 bg-eclat-gray dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-eclat-navy dark:text-eclat-orange" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-eclat-navy dark:text-white">{item.type}</p>
              <p className="text-sm text-eclat-blue">{item.time}</p>
            </div>
            <Users className="w-5 h-5 text-gray-400 dark:text-eclat-blue" />
          </div>
        ))}
      </div>

      {/* Sync Button */}
      <Button className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg">
        <RefreshCw className="w-5 h-5 mr-2" />
        Sync Now
      </Button>
    </div>
  );

  const renderNewCustomerView = () => (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCurrentView("customers")}
            className="text-eclat-navy dark:text-eclat-orange"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">New Customer</h1>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input 
            placeholder="Full Name" 
            className="py-3 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl dark:text-white dark:placeholder:text-eclat-blue" 
            value={newCustomerForm.fullName}
            onChange={(e) => handleFormChange("fullName", e.target.value)}
            required
          />
          <Input 
            placeholder="Phone Number" 
            className="py-3 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl dark:text-white dark:placeholder:text-eclat-blue"
            value={newCustomerForm.phoneNumber}
            onChange={(e) => handleFormChange("phoneNumber", e.target.value)}
            required
          />
          <Input 
            placeholder="Address" 
            className="py-3 bg-eclat-gray dark:bg-gray-800 border-0 rounded-xl dark:text-white dark:placeholder:text-eclat-blue"
            value={newCustomerForm.address}
            onChange={(e) => handleFormChange("address", e.target.value)}
            required
          />
          
          <div className="flex items-center justify-between py-4 px-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-600">
            <span className="font-medium text-eclat-navy dark:text-eclat-orange">Enable Face ID (Required)</span>
            <Switch 
              checked={faceIdEnabled} 
              onCheckedChange={setFaceIdEnabled}
            />
          </div>

          {(!faceIdEnabled || !newCustomerForm.fullName.trim() || !newCustomerForm.phoneNumber.trim() || !newCustomerForm.address.trim()) && (
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
              <p className="text-sm text-orange-800 dark:text-orange-300">
                {!faceIdEnabled 
                  ? "Face ID must be enabled to register a new customer for security purposes."
                  : "Please fill in all fields before registering."
                }
              </p>
            </div>
          )}

          <Button 
            className={`w-full py-4 font-semibold rounded-2xl ${
              faceIdEnabled && newCustomerForm.fullName.trim() && newCustomerForm.phoneNumber.trim() && newCustomerForm.address.trim()
                ? "bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white" 
                : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
            disabled={!faceIdEnabled || !newCustomerForm.fullName.trim() || !newCustomerForm.phoneNumber.trim() || !newCustomerForm.address.trim()}
            onClick={handleNewCustomerRegistration}
          >
            Register
          </Button>
        </div>
      </div>
    </ScrollArea>
  );

  const renderFaceIdCaptureView = () => (
    <FaceIdCapture 
      onBack={() => setCurrentView("newCustomer")}
      onCapture={() => setCurrentView("faceIdSuccess")}
    />
  );

  const renderFaceIdSuccessView = () => (
    <FaceIdSuccess 
      onContinue={() => setCurrentView("customers")}
    />
  );

  const renderCustomerDetailsView = () => (
    <ScrollArea className="h-[calc(100vh-10rem)] pr-4">
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setCurrentView("customers")}
            className="text-eclat-navy dark:text-eclat-orange"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold text-eclat-navy dark:text-eclat-orange">Customer Details</h1>
        </div>

        {/* Customer Info */}
        <div className="text-center space-y-4">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={selectedCustomer?.avatar} />
            <AvatarFallback className="bg-orange-200 text-eclat-navy text-2xl">
              {selectedCustomer?.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-eclat-navy dark:text-white">{selectedCustomer?.name}</h2>
            <p className="text-eclat-blue">Customer ID: {selectedCustomer?.id}</p>
          </div>
        </div>

        {/* Savings History */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-eclat-navy dark:text-eclat-orange">Savings History</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div>
                <p className="font-semibold text-eclat-navy dark:text-white">100</p>
                <p className="text-sm text-eclat-blue">Deposit</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-eclat-blue">2024-01-15</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div>
                <p className="font-semibold text-eclat-navy dark:text-white">50</p>
                <p className="text-sm text-eclat-blue">Withdrawal</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-eclat-blue">2024-02-20</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600">
              <div>
                <p className="font-semibold text-eclat-navy dark:text-white">75</p>
                <p className="text-sm text-eclat-blue">Deposit</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-eclat-blue">2024-03-10</p>
            </div>
          </div>
        </div>

        {/* New Entry Button */}
        <Button 
          className="w-full py-4 bg-gradient-to-r from-eclat-blue to-blue-500 hover:from-blue-600 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg"
          onClick={() => setCurrentView("newDeposit")}
        >
          New Entry
        </Button>
      </div>
    </ScrollArea>
  );

  const renderNewDepositView = () => (
    <NewDeposit 
      onBack={() => setCurrentView("customerDetails")}
      onSubmit={(amount) => {
        setDepositAmount(amount);
        setCurrentView("depositConfirmation");
      }}
      customerName={selectedCustomer?.name || ""}
    />
  );

  const renderDepositConfirmationView = () => (
    <DepositConfirmation 
      onBack={() => setCurrentView("newDeposit")}
      onDone={() => setCurrentView("customerDetails")}
      amount={depositAmount}
      customerName={selectedCustomer?.name || ""}
    />
  );

  const renderView = () => {
    switch (currentView) {
      case "customers":
        return renderCustomersView();
      case "unsynced":
        return renderUnsyncedView();
      case "newCustomer":
        return renderNewCustomerView();
      case "faceIdCapture":
        return renderFaceIdCaptureView();
      case "faceIdSuccess":
        return renderFaceIdSuccessView();
      case "customerDetails":
        return renderCustomerDetailsView();
      case "newDeposit":
        return renderNewDepositView();
      case "depositConfirmation":
        return renderDepositConfirmationView();
      default:
        return renderHomeView();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="p-6">
          {renderView()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex justify-around items-center">
            <button 
              onClick={() => setCurrentView("home")}
              className={`flex flex-col items-center gap-1 ${currentView === "home" ? "text-eclat-blue" : "text-gray-400 dark:text-gray-500"}`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button 
              onClick={() => setCurrentView("customers")}
              className={`flex flex-col items-center gap-1 ${currentView === "customers" ? "text-eclat-blue" : "text-gray-400 dark:text-gray-500"}`}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-medium">Customers</span>
            </button>
            <button 
              onClick={() => navigate("/transactions")}
              className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500"
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs font-medium">Transactions</span>
            </button>
            <button 
              onClick={() => navigate("/settings")}
              className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500"
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
