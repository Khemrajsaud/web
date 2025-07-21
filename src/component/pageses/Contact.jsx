import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import firm from "../../assets/form.jpeg";
import Maps from "../address/Maps";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs

      .sendForm("service_ch9c6rh", "template_smhsrpa", form.current, {
        publicKey: "e8fiYD4ifT77UAV-3",
      })

      .then(
        (result) => {
          console.log(result);
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send message!");
        }
      );
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
              We'd love to hear from you!
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg">
              Please let us know what you are looking for and we will get in
              touch with you.
            </p>
          </div>

          <div>
            <p className="text-gray-700 font-semibold">Corporate With Us</p>
            <p className="text-gray-600">Hiledol, Kathmandu</p>
          </div>

          <div className="hidden md:block">
            <img className="rounded-md shadow-md" src={firm} alt="firm" />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-full md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                name="fullName"
                id="fullName"
                type="text"
                required
                placeholder="Enter Your Name"
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                name="title"
                id="title"
                type="text"
                required
                placeholder="Enter Your Title"
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Business Email Address*
              </label>
              <input
                name="email"
                id="email"
                type="email"
                required
                placeholder="Enter Your Email"
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="organization"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Organization*
              </label>
              <input
                name="organization"
                id="organization"
                type="text"
                required
                placeholder="Enter Your Organization"
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Phone/Mobile
              </label>
              <input
                name="phone"
                id="phone"
                type="tel"
                placeholder="Enter Your Phone Number"
                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none py-2 px-1"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="checkbox"
                type="checkbox"
                className="mt-1 accent-blue-600"
                required
              />
              <label htmlFor="checkbox" className="text-sm text-gray-600">
                I have read Seinxera Solutions’s{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and agree to the terms and conditions.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Maps/>
    </div>
  );
};

export default Contact;
