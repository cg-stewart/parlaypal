import Image from "next/image";

const steps = [
  {
    title: "Upload Your Ticket",
    description:
      "Take a screenshot of your betting ticket and upload it to ParlayPal.",
    image: "/placeholder.svg",
  },
  {
    title: "AI Extraction",
    description:
      "Our advanced AI extracts all the details from your ticket automatically.",
    image: "/placeholder.svg",
  },
  {
    title: "Get Notifications",
    description:
      "Receive real-time updates on your bets, tailored to your specific wagers.",
    image: "/placeholder.svg",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          How ParlayPal Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 relative w-full aspect-square">
                <Image
                  src={step.image}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-green-400 opacity-20 rounded-lg"></div>
                <div className="absolute top-4 left-4 bg-green-400 text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
