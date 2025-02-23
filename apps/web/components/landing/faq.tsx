import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";

const faqs = [
  {
    question: "How does ParlayPal work?",
    answer:
      "ParlayPal allows you to upload screenshots of your betting tickets. Our AI then extracts the bet details and provides real-time notifications on your bets' progress.",
  },
  {
    question: "Is ParlayPal free to use?",
    answer:
      "Yes, ParlayPal offers a free tier with basic features. We also offer premium plans with advanced analytics and unlimited bet tracking.",
  },
  {
    question: "Can I use ParlayPal with any sportsbook?",
    answer:
      "ParlayPal is designed to work with tickets from any sportsbook. Our AI can recognize and process a wide variety of ticket formats.",
  },
  {
    question: "How accurate are the notifications?",
    answer:
      "Our notifications are highly accurate and timely. We use reliable sports data providers to ensure you get the most up-to-date information on your bets.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
