import Link from "next/link";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Elevate Your{" "}
              <span className="text-green-400">Sports Betting</span> Game
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-2xl">
              Upload your tickets, track your bets, and receive real-time
              notifications. ParlayPal is your AI-powered companion for smarter
              sports betting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-400 text-gray-900 hover:bg-green-500 text-lg px-8 py-4"
              >
                <Link href="/signup">Start Winning Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900 text-lg px-8 py-4"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="ParlayPal App Demo"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-green-400 text-gray-900 rounded-full p-4 shadow-lg">
              <span className="text-2xl font-bold">98%</span>
              <span className="block text-sm">User Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-full">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
