import { AlertTriangle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 text-center">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-yellow-500 animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">System Upgrade</h1>
        <p className="text-lg text-gray-600">
          We are currently upgrading our system to then enviroment(domain), we
          shall be back ASAP .
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>Estimated downtime: 1 Month</span>
        </div>
        <div className="pt-6">
          <Button className="w-full">
            <Mail className="mr-2 h-4 w-4" />
            Notify me when it&apos;s back
          </Button>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        Thank you for your patience and understanding.
      </p>
    </div>
  );
}
