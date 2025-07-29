"use client"

import { useState } from "react"
import { AdminDashboard } from "@/components/admin-dashboard"
import { TeamManagement } from "@/components/team-management"
import { ReportingHub } from "@/components/reporting-hub"
import { Settings } from "@/components/settings"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function MileIQAdminApp() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard />
      case "team":
        return <TeamManagement />
      case "reports":
        return <ReportingHub />
      case "settings":
        return <Settings />
      default:
        return <AdminDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pb-20">{renderActiveComponent()}</div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
