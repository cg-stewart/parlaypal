import { Check } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Upload up to 5 tickets per month",
      "Basic notifications",
      "Win/loss tracking",
      "7-day bet history",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    features: [
      "Unlimited ticket uploads",
      "Advanced real-time notifications",
      "Detailed performance analytics",
      "30-day bet history",
      "AI-powered betting insights",
    ],
  },
  {
    name: "Ultimate",
    price: "$19.99",
    features: [
      "All Pro features",
      "Priority support",
      "Advanced AI predictions",
      "Unlimited bet history",
      "Custom alerts and notifications",
      "Early access to new features",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Choose Your Winning Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-xl text-gray-400">/month</span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={
                  index === 1
                    ? "bg-green-400 text-gray-900 hover:bg-green-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }
              >
                {index === 0 ? "Get Started" : "Subscribe Now"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
