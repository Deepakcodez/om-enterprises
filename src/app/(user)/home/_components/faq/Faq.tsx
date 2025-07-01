import XpaddingWrapper from "@/components/XpaddingWrapper";
import WideScreenHandler from "@/components/WideScreenHandler";
import FaqData from "./FaqData";


const faqs = [
  {
    question: "What makes your OTP SMS Gateway reliable?",
    answer:
      "We are always dedicated to providing quality service. Thus, we always make use of high-end technologies while utilising years of experience that we have gathered to provide reliable OTP SMS service. That's why we are the Best Bulk SMS Service Provider in India.",
  },
  {
    question: "Within how much time does the OTP SMS reach customers?",
    answer:
      "It usually takes around 2-6 seconds to reach the customers. Best Bulk SMS Service Provider in India.",
  },
  {
    question: "How long is the OTP valid?",
    answer: "OTP is valid for 15 minutes for one-time use only.",
  },
  {
    question: "How secure is OTP Verification?",
    answer:
      "Our OTP SMS uses two-factor authentication which protects the data of the customers and keeps your website secured. Consult with the Best Bulk SMS Service Provider in India.",
  },
];

export default function Faq() {
  return (
    <WideScreenHandler>
      <XpaddingWrapper className="pt-6 pb-24">
        <div className="py-12 relative">
          <h1 className="absolute top-2 left-0 right-0 text-6xl font-bold text-OMblue bg-gradient-to-b from-OMblue/20 via-OMblue/10 to-transparent bg-clip-text text-transparent text-center">
            FAQ
          </h1>
          <h1 className="text-4xl font-bold text-center text-blue-950">
            Frequently Asked <span className="text-OMblue">Questions</span>
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqData
              key={`FAQ_${index}`}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </XpaddingWrapper>
    </WideScreenHandler>
  );
}