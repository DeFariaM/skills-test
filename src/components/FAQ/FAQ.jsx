import Accordion from "./Accordion";

const FAQ = () => {
  const questions = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as posible.",
    },
  ];
  return (
    <div>
      <div className="space-y-5 text-center">
        <h2 className="text-4xl font-semibold">Frequently asked questions</h2>
        <p className="text-xl text-secondary">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <div className="space-y-10 divide-y">
        {questions &&
          questions.map(({ question, answer }, index) => (
            <Accordion question={question} answer={answer} key={index} />
          ))}
      </div>
    </div>
  );
};

export default FAQ;
