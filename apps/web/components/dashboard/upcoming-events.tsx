import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

const upcomingEvents = [
  {
    id: 1,
    date: "2023-06-10",
    event: "Lakers vs Warriors",
    time: "8:00 PM ET",
  },
  { id: 2, date: "2023-06-11", event: "Celtics vs Heat", time: "7:30 PM ET" },
  { id: 3, date: "2023-06-12", event: "Nuggets vs Suns", time: "9:00 PM ET" },
];

export default function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{event.event}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
              <p className="text-sm font-medium">{event.time}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
