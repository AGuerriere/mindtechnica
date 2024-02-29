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
          <label htmlFor="youremail">Email</label>
          <input
            {...register("email", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Email address*"
            type="email"
            id="youremail" />
        </div>

        <div className="mb-3">
          <label htmlFor="whatservice">What services are you interested in?</label>
          <textarea
            {...register("whatservice", { required: true })}
            className="rounded-md pt-2 text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Enter the service required*"
            id="whatservice"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="yourmessage">Message:</label>
          <textarea
            {...register("message", { required: true })}
            className="rounded-md pt-2 text-xs w-full h-28 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Type your message here*"
            id="yourmessage"></textarea>
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
