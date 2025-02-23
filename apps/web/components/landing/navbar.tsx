import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">
          ParlayPal
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white">
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Button
            variant="outline"
            className="text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900"
          >
            Log In
          </Button>
          <Button className="bg-green-400 text-gray-900 hover:bg-green-500">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}
