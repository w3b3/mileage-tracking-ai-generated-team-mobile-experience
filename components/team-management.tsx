"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreVertical, Car, DollarSign, MapPin, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const drivers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    miles: 1247,
    amount: 748,
    lastActive: "2 hours ago",
    location: "Vancouver, BC",
  },
  {
    id: 2,
    name: "Mike Chen",
    email: "mike.c@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "active",
    miles: 892,
    amount: 535,
    lastActive: "5 hours ago",
    location: "Toronto, ON",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@company.com",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "pending",
    miles: 0,
    amount: 0,
    lastActive: "Never",
    location: "Not set",
  },
]

export function TeamManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="text-gray-600">Manage drivers and permissions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Driver
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search drivers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-xs text-gray-600">Active Drivers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-xs text-gray-600">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-2xl font-bold text-orange-600">3</p>
            <p className="text-xs text-gray-600">Admins</p>
          </CardContent>
        </Card>
      </div>

      {/* Driver List */}
      <div className="space-y-3">
        {drivers.map((driver) => (
          <Card key={driver.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={driver.avatar || "/placeholder.svg"} alt={driver.name} />
                    <AvatarFallback>
                      {driver.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{driver.name}</p>
                    <p className="text-sm text-gray-600">{driver.email}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <Badge
                        variant={driver.status === "active" ? "default" : "secondary"}
                        className={driver.status === "active" ? "bg-green-100 text-green-800" : ""}
                      >
                        {driver.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                    <DropdownMenuItem>Set Custom Rate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Remove Driver</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Driver Stats */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">{driver.miles} miles</p>
                    <p className="text-xs text-gray-600">This month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">${driver.amount}</p>
                    <p className="text-xs text-gray-600">Reimbursable</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">{driver.location}</p>
                    <p className="text-xs text-gray-600">Location</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">{driver.lastActive}</p>
                    <p className="text-xs text-gray-600">Last active</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
