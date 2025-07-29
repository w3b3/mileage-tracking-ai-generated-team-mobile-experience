"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileText, Download, Calendar, Filter, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const reports = [
  {
    id: 1,
    period: "December 2024",
    status: "ready",
    drivers: 12,
    miles: 2847,
    amount: 1708,
    dueDate: "Jan 5, 2025",
    completion: 100,
  },
  {
    id: 2,
    period: "November 2024",
    status: "submitted",
    drivers: 11,
    miles: 3124,
    amount: 1874,
    dueDate: "Dec 5, 2024",
    completion: 100,
  },
  {
    id: 3,
    period: "October 2024",
    status: "pending",
    drivers: 12,
    miles: 2156,
    amount: 1294,
    dueDate: "Nov 5, 2024",
    completion: 87,
  },
]

export function ReportingHub() {
  const [selectedPeriod, setSelectedPeriod] = useState("current")

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reporting Hub</h1>
          <p className="text-gray-600">Generate and manage team reports</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="h-4 w-4 mr-2" />
          New Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold">$14,740</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% vs last month
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Auto Reports</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  Next: Jan 1st
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex space-x-3">
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Month</SelectItem>
            <SelectItem value="last3">Last 3 Months</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Reports List */}
      <div className="space-y-3">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{report.period}</h3>
                  <p className="text-sm text-gray-600">
                    {report.drivers} drivers • {report.miles} miles
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {report.status === "ready" && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Ready
                    </Badge>
                  )}
                  {report.status === "submitted" && (
                    <Badge className="bg-blue-100 text-blue-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Submitted
                    </Badge>
                  )}
                  {report.status === "pending" && (
                    <Badge className="bg-orange-100 text-orange-800">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Pending
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completion</span>
                  <span className="text-sm font-medium">{report.completion}%</span>
                </div>
                <Progress value={report.completion} className="h-2" />

                <div className="flex justify-between items-center pt-2">
                  <div>
                    <p className="text-lg font-bold text-gray-900">${report.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-600">Due: {report.dueDate}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Auto Report Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            Automatic Reporting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Monthly Reports</p>
              <p className="text-sm text-gray-600">Auto-generate on 1st of each month</p>
            </div>
            <Badge className="bg-green-100 text-green-800">Active</Badge>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Reminder Notifications</p>
              <p className="text-sm text-gray-600">Send to drivers 3 days before due</p>
            </div>
            <Badge variant="outline">Inactive</Badge>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Configure Auto Reports
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
