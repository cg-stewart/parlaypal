"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const sampleScores = [
  { id: 1, teams: "LAL vs GSW", score: "105-98", time: "Final" },
  { id: 2, teams: "BOS vs MIA", score: "112-109", time: "Q4 2:30" },
  { id: 3, teams: "DEN vs PHX", score: "87-82", time: "Q3 5:45" },
  { id: 4, teams: "DAL vs LAC", score: "56-60", time: "Halftime" },
  { id: 5, teams: "MIL vs BKN", score: "29-31", time: "Q1 2:15" },
];

export default function ScoreTicker() {
  const [scores, setScores] = useState(sampleScores);

  useEffect(() => {
    const interval = setInterval(() => {
      setScores((prevScores) => {
        const newScores = [...prevScores];
        newScores.push(newScores.shift()!);
        return newScores;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {scores.map((score) => (
          <div key={score.id} className="flex items-center mx-4">
            <span className="font-bold">{score.teams}</span>
            <span className="mx-2">{score.score}</span>
            <span className="text-green-400">{score.time}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
