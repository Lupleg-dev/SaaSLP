"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Settings,
  User,
  CreditCard,
  DollarSign,
  Users,
  Activity,
  ArrowDownRight,
  Home,
  LayoutDashboard,
  FileText,
  HelpCircle,
  LogOut,
  Search,
  Menu,
  X,
} from "lucide-react";
import { BarChart, PieChart, LineChart } from "recharts";

export default function SaaSDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:transform-none`}
      >
        <div className="flex items-center justify-between h-16 border-b px-4">
          <span className="text-2xl font-bold text-[#954DEA]">SaaSly</span>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-grow text-black">
          <ul className="px-4 py-4 space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Customers
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Reports
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full text-black justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help Center
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={toggleSidebar}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-800">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-8 pr-4 rounded-full text-black"
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-black" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8 text-black">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="User"
                      />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Mark Sikaundi
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        mark.sikaundi@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="md:hidden p-4">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-8 pr-4 rounded-full"
            />
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
              {/* MRR Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Monthly Recurring Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,567</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% from last month
                  </p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>
              {/* New Customers Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    New Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                  <Progress value={58} className="mt-2" />
                </CardContent>
              </Card>
              {/* Active Users Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Users
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">14,532</div>
                  <p className="text-xs text-muted-foreground">
                    +7.4% from last week
                  </p>
                  <Progress value={66} className="mt-2" />
                </CardContent>
              </Card>
              {/* Churn Rate Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Churn Rate
                  </CardTitle>
                  <ArrowDownRight className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.5%</div>
                  <p className="text-xs text-muted-foreground">
                    -0.3% from last month
                  </p>
                  <Progress value={15} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 mb-8 md:grid-cols-2">
              {/* Revenue Chart */}
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart
                    data={[
                      { name: "Jan", total: 12000 },
                      { name: "Feb", total: 15000 },
                      { name: "Mar", total: 18000 },
                      { name: "Apr", total: 20000 },
                      { name: "May", total: 22000 },
                      { name: "Jun", total: 25000 },
                    ]}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>

              {/* Customer Acquisition Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: "Organic", value: 400 },
                      { name: "Referral", value: 300 },
                      { name: "Social", value: 200 },
                      { name: "Ads", value: 100 },
                    ]}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>

              {/* User Demographics Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart
                    data={[
                      { name: "18-24", value: 20 },
                      { name: "25-34", value: 35 },
                      { name: "35-44", value: 25 },
                      { name: "45+", value: 20 },
                    ]}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    { action: "New user signed up", time: "2 minutes ago" },
                    { action: "Premium plan purchased", time: "1 hour ago" },
                    { action: "New feature deployed", time: "3 hours ago" },
                    {
                      action: "Customer support ticket resolved",
                      time: "5 hours ago",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback>{activity.action[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
