const FAQSection = () => {
  const faqs = [
    {
      question: "What types of loans do you offer?",
      answer:
        "We offer a variety of loans, including:\n- Home loans for purchasing or constructing your dream home.\n- Interior loans for designing and furnishing your space.\n- Loans against property for construction or renovation needs.",
    },
    {
      question: "What is the process for applying for a loan?",
      answer:
        "The process is simple and streamlined:\n1. Submit basic documents for verification.\n2. Get approved within a few days.\n3. Finalize the loan with our team of banking partners.\nWe’ll guide you every step of the way to make the process hassle-free.",
    },
    {
      question: "What documents are required to apply for a loan?",
      answer:
        "You will need:\n- Identity proof (e.g., Aadhaar, PAN, or Passport)\n- Address proof (e.g., utility bill, rental agreement)\n- Income proof (e.g., salary slips, bank statements)\n- Property documents (for home or construction loans)",
    },
    {
      question: "How competitive are your loan interest rates?",
      answer:
        "We work with over 90+ trusted banking partners to bring you the best interest rates in the market, ensuring you save more while building or designing your dream home.",
    },
    {
      question: "Can I get a loan for interior design or renovation?",
      answer:
        "Yes, we offer tailored loans specifically for interior design and renovation projects, ensuring you can create a space that matches your vision without financial stress.",
    },
    {
      question: "How long does it take to get loan approval?",
      answer:
        "Our fast-track approval process ensures you get pre-approved within a few days, depending on the completeness of your documents and eligibility. Final approval timelines may vary based on the loan type.",
    },
  ];

  return (
    <div className="p-6 bg-green-50 bg-[#f3fafa] mx-4 md:mx-36 rounded-se-3xl my-10">
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
            <div className="collapse-content text-gray-700 whitespace-pre-line">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
