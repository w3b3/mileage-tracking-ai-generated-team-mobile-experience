"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Car, DollarSign, AlertTriangle, Clock, MapPin, FileText } from "lucide-react"

export function AdminDashboard() {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Team overview for December 2024</p>
        </div>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          12 Active Drivers
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Car className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Miles</p>
                <p className="text-xl font-bold">24,567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Reimbursable</p>
                <p className="text-xl font-bold">$14,740</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
            Requires Attention
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Drives to Approve</p>
              <p className="text-sm text-gray-600">47 pending approval</p>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Review
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Unclassified Drives</p>
              <p className="text-sm text-gray-600">23 across 5 drivers</p>
            </div>
            <Button size="sm" variant="outline">
              Classify
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Team Performance */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Team Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Classification Rate</span>
              <span>87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Report Submission</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button className="h-16 flex-col space-y-1 bg-blue-600 hover:bg-blue-700">
          <Users className="h-5 w-5" />
          <span className="text-sm">Manage Drivers</span>
        </Button>

        <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
          <FileText className="h-5 w-5" />
          <span className="text-sm">Generate Report</span>
        </Button>

        <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
          <MapPin className="h-5 w-5" />
          <span className="text-sm">Team Locations</span>
        </Button>

        <Button variant="outline" className="h-16 flex-col space-y-1 bg-transparent">
          <Clock className="h-5 w-5" />
          <span className="text-sm">Auto Reports</span>
        </Button>
      </div>
    </div>
  )
}
