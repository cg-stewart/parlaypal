import Image from "next/image";

const testimonials = [
  {
    name: "John D.",
    image: "/placeholder.svg",
    quote:
      "ParlayPal has completely transformed my betting experience. The real-time notifications are a game-changer!",
  },
  {
    name: "Sarah M.",
    image: "/placeholder.svg",
    quote:
      "I love how easy it is to upload tickets and track my bets. ParlayPal has helped me become a more disciplined bettor.",
  },
  {
    name: "Mike R.",
    image: "/placeholder.svg",
    quote:
      "The AI-powered insights have given me a real edge. My win rate has improved significantly since using ParlayPal.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
