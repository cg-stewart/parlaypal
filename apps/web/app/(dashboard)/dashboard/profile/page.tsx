import Image from "next/image";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { Button } from "@workspace/ui/components/button";

const winningTickets = [
  {
    id: 1,
    image: "/placeholder.svg",
    date: "2023-06-01",
    amount: "$100",
    description: "NBA: Lakers vs Warriors",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    date: "2023-06-03",
    amount: "$250",
    description: "NFL: Patriots vs Bills",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    date: "2023-06-05",
    amount: "$150",
    description: "MLB: Yankees vs Red Sox",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    date: "2023-06-07",
    amount: "$180",
    description: "NHL: Bruins vs Canadiens",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    date: "2023-06-09",
    amount: "$120",
    description: "UFC: McGregor vs Poirier",
  },
];

const losingTickets = [
  {
    id: 1,
    image: "/placeholder.svg",
    date: "2023-06-02",
    amount: "$50",
    description: "Premier League: Man City vs Liverpool",
  },
  {
    id: 2,
    image: "/placeholder.svg",
    date: "2023-06-04",
    amount: "$75",
    description: "Tennis: Nadal vs Djokovic",
  },
  {
    id: 3,
    image: "/placeholder.svg",
    date: "2023-06-06",
    amount: "$90",
    description: "F1: Monaco Grand Prix",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    date: "2023-06-08",
    amount: "$60",
    description: "Golf: Masters Tournament",
  },
];

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/placeholder.svg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-green-400"
        />
        <div className="text-center">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-gray-400">@johndoe</p>
        </div>
        <p className="text-center max-w-md">
          Sports betting enthusiast with a passion for data-driven decisions.
          Always looking for the next big win!
        </p>
        <Button className="bg-green-400 text-gray-900 hover:bg-green-500">
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <Card className="bg-gray-800 border-green-400">
          <CardContent className="p-4">
            <p className="text-xl font-semibold text-green-400">Total Bets</p>
            <p className="text-2xl font-bold text-white">254</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-green-400">
          <CardContent className="p-4">
            <p className="text-xl font-semibold text-green-400">Win Rate</p>
            <p className="text-2xl font-bold text-white">62.5%</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-green-400">
          <CardContent className="p-4">
            <p className="text-xl font-semibold text-green-400">Win-Loss</p>
            <p className="text-2xl font-bold text-white">159-95</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="winning-tickets" className="space-y-4">
        <TabsList className="w-full bg-gray-800">
          <TabsTrigger
            value="winning-tickets"
            className="flex-1 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900"
          >
            Winning Tickets
          </TabsTrigger>
          <TabsTrigger
            value="losing-tickets"
            className="flex-1 data-[state=active]:bg-green-400 data-[state=active]:text-gray-900"
          >
            Losing Tickets
          </TabsTrigger>
        </TabsList>
        <TabsContent value="winning-tickets">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {winningTickets.map((ticket) => (
              <Card key={ticket.id} className="bg-gray-800 border-green-400">
                <CardContent className="p-4">
                  <Image
                    src={ticket.image}
                    alt={`Winning ticket from ${ticket.date}`}
                    width={300}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <p className="font-semibold text-white">{ticket.date}</p>
                  <p className="text-sm text-gray-400 mb-1">
                    {ticket.description}
                  </p>
                  <p className="text-green-400 font-bold">+{ticket.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="losing-tickets">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {losingTickets.map((ticket) => (
              <Card key={ticket.id} className="bg-gray-800 border-red-400">
                <CardContent className="p-4">
                  <Image
                    src={ticket.image}
                    alt={`Losing ticket from ${ticket.date}`}
                    width={300}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <p className="font-semibold text-white">{ticket.date}</p>
                  <p className="text-sm text-gray-400 mb-1">
                    {ticket.description}
                  </p>
                  <p className="text-red-400 font-bold">-{ticket.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
