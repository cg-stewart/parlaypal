import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";

const recentBets = [
  {
    id: 1,
    date: "2023-06-01",
    type: "Moneyline",
    team: "Lakers",
    odds: "+150",
    result: "Win",
  },
  {
    id: 2,
    date: "2023-06-02",
    type: "Spread",
    team: "Warriors -5.5",
    odds: "-110",
    result: "Loss",
  },
  {
    id: 3,
    date: "2023-06-03",
    type: "Over/Under",
    team: "Celtics vs Heat O215.5",
    odds: "-105",
    result: "Win",
  },
  {
    id: 4,
    date: "2023-06-04",
    type: "Prop",
    team: "LeBron James Over 28.5 Points",
    odds: "-115",
    result: "Win",
  },
  {
    id: 5,
    date: "2023-06-05",
    type: "Parlay",
    team: "Multiple",
    odds: "+450",
    result: "Loss",
  },
];

export default function RecentBets() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Team/Player</TableHead>
          <TableHead>Odds</TableHead>
          <TableHead>Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentBets.map((bet) => (
          <TableRow key={bet.id}>
            <TableCell>{bet.date}</TableCell>
            <TableCell>{bet.type}</TableCell>
            <TableCell>{bet.team}</TableCell>
            <TableCell>{bet.odds}</TableCell>
            <TableCell
              className={
                bet.result === "Win" ? "text-green-600" : "text-red-600"
              }
            >
              {bet.result}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
