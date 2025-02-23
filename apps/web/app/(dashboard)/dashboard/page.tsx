import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import RecentBets from "@/components/dashboard/recent-bets";
import BettingStats from "@/components/dashboard/betting-stats";
import UpcomingEvents from "@/components/dashboard/upcoming-events";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-400">Welcome back, John!</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-800 border-green-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-400">
              Total Bets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">254</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-green-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-400">
              Win Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">62.5%</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-green-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-400">
              Total Winnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$3,240.50</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-green-400">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-400">
              ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">18.7%</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent-bets" className="space-y-4">
        <TabsList className="w-full bg-gray-800">
          <TabsTrigger
            value="recent-bets"
            className="flex-1 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900"
          >
            Recent Bets
          </TabsTrigger>
          <TabsTrigger
            value="betting-stats"
            className="flex-1 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900"
          >
            Betting Stats
          </TabsTrigger>
          <TabsTrigger
            value="upcoming-events"
            className="flex-1 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900"
          >
            Upcoming Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recent-bets" className="bg-gray-800 p-4 rounded-lg">
          <RecentBets />
        </TabsContent>
        <TabsContent
          value="betting-stats"
          className="bg-gray-800 p-4 rounded-lg"
        >
          <BettingStats />
        </TabsContent>
        <TabsContent
          value="upcoming-events"
          className="bg-gray-800 p-4 rounded-lg"
        >
          <UpcomingEvents />
        </TabsContent>
      </Tabs>
    </div>
  );
}
