"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, LineChart } from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Heart,
  Flame,
  Footprints,
  Dumbbell,
  Utensils,
  Droplets,
  Moon,
  Award,
} from "lucide-react";

export default function FitnessTracker() {
  const dailyActivityData = [
    { name: "Mon", steps: 8000, calories: 2200 },
    { name: "Tue", steps: 10000, calories: 2500 },
    { name: "Wed", steps: 9000, calories: 2300 },
    { name: "Thu", steps: 11000, calories: 2600 },
    { name: "Fri", steps: 8500, calories: 2400 },
    { name: "Sat", steps: 12000, calories: 2800 },
    { name: "Sun", steps: 7500, calories: 2100 },
  ];

  const weeklyProgressData = [
    { name: "Week 1", progress: 65 },
    { name: "Week 2", progress: 72 },
    { name: "Week 3", progress: 80 },
    { name: "Week 4", progress: 85 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">FitTrack Pro</h1>
          <Avatar className="h-12 w-12 text-black">
            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="User" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
              <Footprints className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10,234</div>
              <Progress value={85} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                85% of daily goal
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Calories Burned
              </CardTitle>
              <Flame className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,756</div>
              <Progress value={70} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                70% of daily goal
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Active Minutes
              </CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <Progress value={60} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                60% of daily goal
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72 BPM</div>
              <Progress value={100} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Resting heart rate
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Daily Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={dailyActivityData} className="h-[300px]" />
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart data={weeklyProgressData} className="h-[300px]" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Workout Plan</CardTitle>
              <CardDescription>Today&apos;s exercises</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Bench Press - 3 sets x 10 reps</span>
                </li>
                <li className="flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Squats - 3 sets x 12 reps</span>
                </li>
                <li className="flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Deadlifts - 3 sets x 8 reps</span>
                </li>
                <li className="flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Shoulder Press - 3 sets x 10 reps</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle>Nutrition</CardTitle>
              <CardDescription>Daily intake</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 mr-2 text-green-500" />
                    <span>Calories</span>
                  </div>
                  <span>1,800 / 2,200</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 mr-2 text-green-500" />
                    <span>Protein</span>
                  </div>
                  <span>80g / 120g</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 mr-2 text-green-500" />
                    <span>Carbs</span>
                  </div>
                  <span>200g / 250g</span>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Utensils className="h-5 w-5 mr-2 text-green-500" />
                    <span>Fat</span>
                  </div>
                  <span>50g / 70g</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-lg lg:col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Wellness</CardTitle>
              <CardDescription>Daily tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <Droplets className="h-8 w-8 mb-2 text-blue-500" />
                  <span className="text-sm font-medium">Water</span>
                  <span className="text-2xl font-bold">1.5L</span>
                  <span className="text-xs text-muted-foreground">
                    of 2L goal
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Moon className="h-8 w-8 mb-2 text-indigo-500" />
                  <span className="text-sm font-medium">Sleep</span>
                  <span className="text-2xl font-bold">7h 20m</span>
                  <span className="text-xs text-muted-foreground">
                    of 8h goal
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/50 backdrop-blur-lg mb-8">
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                10K Steps
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                Early Bird
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                Workout Streak
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                Nutrition Master
              </Badge>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-gray-500">
          <p>&copy; 2024 FitTrack Pro. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
