import { Upload, Bell, TrendingUp, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Easy Ticket Upload",
    description:
      "Simply screenshot your betting ticket and upload it to ParlayPal. Our AI does the rest.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description:
      "Get instant updates on your bets, including score changes and prop bet progress.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description:
      "Analyze your betting history, track your win-loss record, and improve your strategies.",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description:
      "Receive personalized betting tips and insights based on your betting history and current trends.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is encrypted and never shared. We prioritize your privacy and security.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description:
      "Dive deep into your betting data with our advanced analytics tools and visualizations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Why Choose ParlayPal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
