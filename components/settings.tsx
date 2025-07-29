"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, MapPin, Bell, Shield, Zap } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Settings() {
  const [autoTracking, setAutoTracking] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [customRate, setCustomRate] = useState("0.67")

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Configure team and admin preferences</p>
      </div>

      {/* Mileage Settings */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
            Mileage & Rates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rate">Default Mileage Rate</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">$</span>
              <Input id="rate" value={customRate} onChange={(e) => setCustomRate(e.target.value)} className="w-24" />
              <span className="text-sm text-gray-600">per mile</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Automatic Tracking</p>
              <p className="text-sm text-gray-600">Enable for all new drivers</p>
            </div>
            <Switch checked={autoTracking} onCheckedChange={setAutoTracking} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Exclude Commute</p>
              <p className="text-sm text-gray-600">Auto-exclude home to work drives</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Team Locations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <MapPin className="h-5 w-5 text-blue-600 mr-2" />
            Team Locations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Main Office</p>
              <p className="text-sm text-gray-600">123 Business St, Vancouver, BC</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Branch Office</p>
              <p className="text-sm text-gray-600">456 Commerce Ave, Toronto, ON</p>
            </div>
            <Button variant="outline" size="sm">
              Edit
            </Button>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            + Add Location
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Bell className="h-5 w-5 text-orange-600 mr-2" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Report Reminders</p>
              <p className="text-sm text-gray-600">Notify drivers before due dates</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          <div className="space-y-2">
            <Label>Reminder Frequency</Label>
            <Select defaultValue="3days">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1day">1 day before</SelectItem>
                <SelectItem value="3days">3 days before</SelectItem>
                <SelectItem value="1week">1 week before</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Admin Management */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Shield className="h-5 w-5 text-purple-600 mr-2" />
            Admin Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Multiple Admins</p>
              <p className="text-sm text-gray-600">3 active admin accounts</p>
            </div>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Require Approval</p>
              <p className="text-sm text-gray-600">Admin approval for drive changes</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <Zap className="h-5 w-5 text-yellow-600 mr-2" />
            Integrations & API
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">QuickBooks</p>
              <p className="text-sm text-gray-600">Connected • Auto-sync enabled</p>
            </div>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">API Access</p>
              <p className="text-sm text-gray-600">Generate API keys for custom integrations</p>
            </div>
            <Button variant="outline" size="sm">
              Setup
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center">
            <DollarSign className="h-5 w-5 text-green-600 mr-2" />
            Billing & Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="font-medium text-gray-900">Team Plan</p>
            <p className="text-sm text-gray-600">$8/driver/month • 12 active drivers</p>
            <p className="text-lg font-bold text-blue-600 mt-1">$96/month</p>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            Manage Billing
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
