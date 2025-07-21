import "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import career from "../../assets/career.png";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import img2 from "../../assets/img2.png";
import Submit from "./Submit";

const Careers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Internship Program",
      text: "Our internship program is designed for passionate learners who want to grow their skills, gain real-world experience, and explore career paths in a professional environment. Over the course of 3 months, interns will collaborate on real projects, receive mentorship, and develop hands-on expertise in their chosen field.",
      image: slide1,
    },
    {
      title: "Career Growth",
      text: "Every team member has a development plan with initiatives aimed at improving skills and embracing innovation. As we grow rapidly, our development plans stay adaptive and ensure our workforce stays best-in-class with ability, aspiration, and commitment.",
      image: slide2,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Image */}
      <div>
        <img
          className="w-full object-cover max-h-[500px]"
          src={career}
          alt="career"
        />
      </div>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-16 mx-4 lg:mx-20 gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Discover a career where your ideas matter, your growth is supported,
            and your work makes a difference.
          </h1>
          <button className="bg-blue-900 rounded-md px-6 py-2 text-white hover:bg-blue-800 mt-4">
            Explore Jobs
          </button>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded-md shadow-lg max-w-xl">
          <h1 className="text-xl font-bold mb-3">Developer Intern</h1>
          <p className="text-base leading-relaxed">
            We’re always looking for passionate, creative, and talented
            individuals to grow with us. If you're excited to work on meaningful
            projects, thrive in a collaborative environment, and want to shape
            the future—let’s talk.
          </p>
        </div>
      </div>

      {/* Slide Section */}
      <div className="relative mx-4 lg:mx-20 mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3"
          >
            &lt;
          </button>

          <div className="flex flex-col lg:flex-row items-center w-full gap-6">
            <img
              src={slides[currentSlide].image}
              alt="Slide"
              className="w-full lg:w-1/2 object-cover rounded-md"
            />
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
                {slides[currentSlide].title}
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {slides[currentSlide].text}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-3"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Full Image */}
      <div className="w-full">
        <img className="w-full object-cover max-h-[600px]" src={img2} alt="career" />
      </div>

      {/* Join Our Team Box */}
      <div className="relative w-full px-4">
        <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center border border-gray-200">
          <h3 className="text-orange-600 text-sm font-semibold uppercase">
            Join Our Team
          </h3>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Can't find your job? Don't worry!
          </h1>
          <p className="text-gray-600 mt-4">
            Our team will reach out to you when we have the opening.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Submit Your Resume{" "}
              <IoIosArrowForward className="inline ml-1 text-lg" />
            </button>

            <div>
              <Submit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
