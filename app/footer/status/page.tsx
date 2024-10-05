"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance";

interface Service {
  name: string;
  status: ServiceStatus;
  description: string;
  lastUpdated: string;
}

const services: Service[] = [
  {
    name: "Template API",
    status: "operational",
    description: "API for fetching and managing templates",
    lastUpdated: "2 minutes ago",
  },
  {
    name: "User Authentication",
    status: "operational",
    description: "User login and registration service",
    lastUpdated: "5 minutes ago",
  },
  {
    name: "Payment Processing",
    status: "operational",
    description: "Handling payments and subscriptions",
    lastUpdated: "10 minutes ago",
  },
  {
    name: "Search Service",
    status: "degraded",
    description: "Template search functionality",
    lastUpdated: "15 minutes ago",
  },
  {
    name: "CDN",
    status: "operational",
    description: "Content delivery network for template assets",
    lastUpdated: "20 minutes ago",
  },
  {
    name: "Email Service",
    status: "operational",
    description: "Sending transactional and marketing emails",
    lastUpdated: "25 minutes ago",
  },
];

const statusColors: Record<ServiceStatus, string> = {
  operational: "bg-green-500",
  degraded: "bg-yellow-500",
  outage: "bg-red-500",
  maintenance: "bg-blue-500",
};

const StatusIcon = ({ status }: { status: ServiceStatus }) => {
  switch (status) {
    case "operational":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "degraded":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case "outage":
      return <XCircle className="h-5 w-5 text-red-500" />;
    case "maintenance":
      return <Clock className="h-5 w-5 text-blue-500" />;
  }
};

export default function APIStatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const allOperational = services.every(
    (service) => service.status === "operational"
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Lupleg ShipNow API Status
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>System Status</span>
              <Badge
                variant={allOperational ? "default" : "destructive"}
                className="text-sm"
              >
                {allOperational
                  ? "All Systems Operational"
                  : "Systems Degraded"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              Last checked on {currentTime.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.name}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{service.name}</span>
                  <StatusIcon status={service.status} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <Badge
                    variant="outline"
                    className={`${statusColors[service.status]} text-white`}
                  >
                    {service.status.charAt(0).toUpperCase() +
                      service.status.slice(1)}
                  </Badge>
                  <span className="text-xs text-gray-500">
                    Updated {service.lastUpdated}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          If you&apos;re experiencing issues, please contact our{" "}
          <Link
            href="mailto:payments@lupleg.website"
            className="font-medium text-[#954DEA] hover:text-[#8A45D8]"
          >
            support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
