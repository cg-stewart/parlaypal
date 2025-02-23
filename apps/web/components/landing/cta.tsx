import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-400 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Elevate Your Betting Game?
        </h2>
        <p className="text-xl mb-8">
          Join thousands of winning bettors and start your journey with
          ParlayPal today.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gray-900 text-green-400 hover:bg-gray-800 text-lg px-8 py-4"
        >
          <Link href="/signup">Get Started for Free</Link>
        </Button>
      </div>
    </section>
  );
}
