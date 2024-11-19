
const FAQSection = () => {
  const faqs = [
    {
      question: "Is my subscription account-based or device-based?",
      answer:
        "Your subscription is device-based, which means that we track your subscription based on the device you use to make the purchase. This means that if you pay for a subscription on one device and then login with the same account on a different device with a different Apple / Google ID, there will be no subscription.",
    },
    {
      question:
        "Can I use any photo for the room interior or does it need to meet certain requirements?",
      answer:
        "We recommend that the photo should have good lighting and be taken from a straight angle, so that our AI can accurately detect the room's features and apply the selected style.",
    },
    {
      question: "What is the difference between the free and paid options?",
      answer:
        "The free option allows users to make a limited number of images at a lower resolution, while the paid option allows for unlimited high-quality images.",
    },
    {
      question: "How long does it take for the AI to change the room's interior?",
      answer:
        "The time it takes for the AI to change the room's interior varies depending on the size and complexity of the room, but generally takes a few minutes.",
    },
    {
      question: "Can I share the images I create using the app on social media?",
      answer:
        "Yes, you are free to share the images you create on social media, but we kindly ask that you credit the app if possible.",
    },
    {
      question: "Are the styles available for selection limited to a certain number?",
      answer:
        "No, we offer a wide range of styles for users to select from, so there is plenty of variety to choose from.",
    },
  ];

  return (
    <div className="p-6 bg-green-50">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow border border-green-300 bg-green-100 rounded-lg"
          >
            <div className="collapse-title text-lg font-medium text-green-800">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-700">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;