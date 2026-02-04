"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSuccess(false);
    setIsError(false);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(result.message || "Message sent successfully");
        reset();
      } else {
        setIsError(true);
        setMessage(result.message || "Something went wrong. Please try later.");
      }
    } catch (error) {
      setIsError(true);
      setMessage("Something went wrong. Please try later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
        {/* Hidden botcheck field can be handled by Cloudflare Turnstile or similar if needed, 
            but for now keeping the form clean or we can keep a honeypot field if desired. 
            Removing web3forms specific fields. */}
        
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Enter your first name*"
            type="text"
            id="firstName" />
            {errors.firstName && <span className="text-red-500 text-xs">First name is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Enter your last name*"
            type="text"
            id="lastName" />
             {errors.lastName && <span className="text-red-500 text-xs">Last name is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Email address*"
            type="email"
            id="email" />
             {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="role">Role</label>
          <input
            {...register("role", { required: true })}
            className="rounded-md text-xs w-full h-9 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Your role*"
            type="text"
            id="role" />
             {errors.role && <span className="text-red-500 text-xs">Role is required</span>}
        </div>

        <div className="mb-3">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: true })}
            className="rounded-md pt-2 text-xs w-full h-28 bg-blueFaded text-gray pl-2 mt-2"
            placeholder="Your message*"
            id="message"></textarea>
             {errors.message && <span className="text-red-500 text-xs">Message is required</span>}
        </div>

        <div className="flex justify-start mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="border-solid border-green border-2 rounded-2xl h-12 w-32 hover:bg-green hover:text-bgBlack transition-colors disabled:opacity-50">
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto animate-spin"
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

      {isSuccess && (
        <div className="mt-3 text-sm text-center text-green">
          {message}
        </div>
      )}
      {isError && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message}
        </div>
      )}
    </>
  );
}
