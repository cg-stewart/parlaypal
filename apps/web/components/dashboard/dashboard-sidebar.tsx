import Link from "next/link";
import { Home, User, Upload, Bell, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Upload, label: "Upload Ticket", href: "/dashboard/upload" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-green-400">ParlayPal</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-green-400 transition-colors duration-200"
              >
                <item.icon className="w-5 h-5 mr-2 text-green-400" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <button className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-red-400 transition-colors duration-200">
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
}
