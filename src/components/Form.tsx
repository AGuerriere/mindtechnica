"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "b9068238-355e-45ff-aeea-8506fd26af57";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Mind Technica",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="sm:w-1/2 md:pl-5">
        <input
          {...register("botcheck")}
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}></input>
        <input
          type="hidden"
          {...register("redirect")}
          value="./success" />

        <div className="mb-3">
          <label htmlFor="yourname">Name</label>
          <input
            {...register("name", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Enter your name*"
            type="text"
            id="yourname" />
        </div>

        <div className="mb-3">
          <label htmlFor="company">Company</label>
          <input
            {...register("company", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Your company name*"
            type="text"
            id="company" />
        </div>

        <div className="mb-3">
          <label htmlFor="role">Role / Title</label>
          <input
            {...register("role", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Your role or title*"
            type="text"
            id="role" />
        </div>

        <div className="mb-3">
          <label htmlFor="youremail">Email</label>
          <input
            {...register("email", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Email address*"
            type="email"
            id="youremail" />
        </div>

        <div className="mb-3">
          <label htmlFor="phone">Phone number (optional)</label>
          <input
            {...register("phone")}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Your phone number"
            type="tel"
            id="phone" />
        </div>

        <div className="mb-3">
          <label htmlFor="problem">What problem are you trying to solve?</label>
          <textarea
            {...register("problem", { required: true })}
            className="rounded-md pt-2 text-xs w-full h-28 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Describe the problem or challenge you're facing*"
            id="problem"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="timeline">Estimated timeline</label>
          <select
            {...register("timeline", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            id="timeline">
            <option value="">Select a timeline*</option>
            <option value="immediate">Immediate (within 1 month)</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6months+">6+ months</option>
            <option value="exploring">Just exploring options</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="budget">Budget range (optional)</label>
          <select
            {...register("budget")}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            id="budget">
            <option value="">Select a budget range</option>
            <option value="under-10k">Under £10,000</option>
            <option value="10k-25k">£10,000 - £25,000</option>
            <option value="25k-50k">£25,000 - £50,000</option>
            <option value="50k-100k">£50,000 - £100,000</option>
            <option value="100k+">£100,000+</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="notes">Other notes</label>
          <textarea
            {...register("notes")}
            className="rounded-md pt-2 text-xs w-full h-28 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Any additional information you'd like to share"
            id="notes"></textarea>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="border-solid border-green border-2 rounded-2xl h-12 w-32">
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )}
    </>
  );
}
