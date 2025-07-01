import EnquiryAnimation from "@/components/animation/Enquiry";
import React from "react";
import Form from "./Form";

const ContactForm: React.FC = () => {
  return (
    <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div>
        <Form />
      </div>
      <div className="overflow-hidden flex justify-center items-center"                                      >
        <EnquiryAnimation />
      </div>
    </div>
  );
};

export default ContactForm;
