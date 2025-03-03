"use client";

import * as React from "react";
import { Bell, DollarSign, AlertTriangle } from "lucide-react";

type NotificationType = {
  id: number;
  type: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  date: string;
};

const notifications: NotificationType[] = [
  {
    id: 1,
    type: "bet_settled",
    title: "Bet Settled",
    description:
      "Your bet on Lakers vs Warriors has been settled. You won $100!",
    icon: DollarSign,
    date: "2023-06-10 14:30",
  },
  {
    id: 2,
    type: "upcoming_event",
    title: "Upcoming Event",
    description: "Don't forget: Celtics vs Heat starts in 1 hour.",
    icon: Bell,
    date: "2023-06-10 12:00",
  },
  {
    id: 3,
    type: "bet_at_risk",
    title: "Bet at Risk",
    description: "Your parlay bet is at risk. 2 out of 3 legs have failed.",
    icon: AlertTriangle,
    date: "2023-06-09 20:15",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-400">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="bg-gray-800 border border-green-400 rounded-lg p-6"
            >
              <div className="flex flex-row items-center space-x-4 pb-2">
                <div className="flex items-center space-x-4">
                  <Icon className="h-6 w-6 text-green-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-white">{notification.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
