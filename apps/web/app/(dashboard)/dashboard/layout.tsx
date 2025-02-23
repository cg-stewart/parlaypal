import { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import GamblingDisclaimer from "@/components/dashboard/gambling-disclaimer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
        <div className="mt-8">
          <GamblingDisclaimer />
        </div>
      </main>
    </div>
  );
}
