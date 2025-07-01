"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../ui/Button";
import { instantCallApiCall } from "@/services/services";
import toast from "react-hot-toast";
import Link from "next/link";

// Validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.number().required("Phone Number is Required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  privacyPolicy: yup
    .boolean()
    .required("You must accept the privacy policy")
    .oneOf([true], "You must accept the privacy policy")
});

type FormValues = yup.InferType<typeof schema>;

const FooterForm: React.FC = () => {
  const [isSubmiting, setIsSubmiting] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange" // Validate on change
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.subject ||
      !data.message
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (data.privacyPolicy) {
      setIsSubmiting(true);
      instantCallApiCall(data);
      setIsSubmiting(false);
      reset();
    }
  };

  return (
 <div className="w-full lg:w-12/12 md:w-10/12">
      <h1 className="text-3xl font-bold text-white">
        Contact Us for a <span className="text-OMblue">Quote</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-4">
        {/* Form fields */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Enter your name"
            className="lg:w-8/12 w-full h-10 border-2 border-white bg-white text-black rounded-md p-2 outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your Email"
            className="lg:w-8/12 w-full h-10 border-2 border-white bg-white text-black rounded-md p-2 outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-white">
            Your Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Enter your Phone"
            className="lg:w-8/12 w-full h-10 border-2 border-white  bg-white text-black rounded-md p-2 outline-none"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white">
            Subject
          </label>
          <select
            id="subject"
            {...register("subject")}
            className="lg:w-8/12 w-full h-10 border-2 border-white rounded-md p-2  outline-none bg-white text-black"
          >
            <option value="">Select a subject</option>
            <option value="career enquiry">Career Enquiry</option>
            <option value="business enquiry">Business Enquiry</option>
            <option value="no subject">No Subject</option>
          </select>
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Enter your Message"
            className="min-h-32 max-h-32 lg:w-8/12 w-full h-10 border-2 bg-white text-black border-white rounded-md p-2 outline-none resize-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Privacy Policy Checkbox */}
       <div className="flex items-start gap-2 mt-2 lg:w-8/12">
          <input
            id="privacyPolicy"
            type="checkbox"
            {...register("privacyPolicy")}
            className="mt-1"
          />
          <label htmlFor="privacyPolicy" className="text-white text-sm">
            I agree to the{" "}
            <Link href="/privacy" className="text-OMblue underline">
              Privacy Policy
            </Link>{" "}
            and consent to OM-Enterprises contacting me about my enquiry.
          </label>
        </div>
        {errors.privacyPolicy && (
          <span className="text-red-500 text-sm">
            {errors.privacyPolicy.message}
          </span>
        )}

        <Button
          title={isSubmiting ? "Submitting..." : "Submit"}
          className="self-start"
          type="submit"
          disabled={!isValid || isSubmiting}
        />
      </form>
    </div>
  );
};

export default FooterForm;
