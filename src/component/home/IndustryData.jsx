import { useState } from "react";
import aiImage from "../../assets/ai.jpg";
import itImage from "../../assets/ai.jpg";
import iotImage from "../../assets/ai.jpg";
import desktopImage from "../../assets/ai.jpg";
import mobileImage from "../../assets/ai.jpg";
import webImage from "../../assets/ai.jpg";

const industryItems = [
  {
    title: "AI (Artificial Intelligence)",
    icon: "🤖",
    image: aiImage,
    description:
      "Advanced AI-driven solutions to automate, analyze, and optimize business processes.",
  },
  {
    title: "IT Services",
    icon: "💻",
    image: itImage,
    description:
      "Comprehensive IT services including infrastructure, support, and cybersecurity.",
  },
  {
    title: "IoT (Internet of Things)",
    icon: "🌐",
    image: iotImage,
    description:
      "Smart connected solutions for devices, homes, cities, and industries.",
  },
  {
    title: "Desktop App Development",
    icon: "🖥️",
    image: desktopImage,
    description:
      "Robust desktop applications tailored for enterprise or individual needs.",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    image: mobileImage,
    description: "Native and cross-platform mobile apps with seamless UI/UX.",
  },
  {
    title: "Web Development",
    icon: "🌍",
    image: webImage,
    description:
      "Scalable, responsive, and secure web solutions for businesses of all sizes.",
  },
];

const IndustryData = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industryItems[activeIndex];

  return (
    <div className="px-4 lg:px-20 py-10">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl text-blue-800 font-semibold">
          INDUSTRY FOCUS
        </h2>
        <h1 className="mt-2 md:mt-3 text-2xl md:text-3xl font-bold text-black">
          Purpose-built, next-gen solutions grounded in deep industry expertise
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          From artificial intelligence to mobile and web applications, we build
          cutting-edge solutions to solve real-world problems and drive
          innovation.
        </p>
      </div>

      {/* Main Content - Sidebar + Display Area */}
      <div className="flex flex-col md:flex-row bg-gray-100 p-4 rounded-md shadow-md">
        {/* Sidebar List */}
        <div className="w-full md:w-1/3 space-y-2 mb-4 md:mb-0">
          {industryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer border-b text-base md:text-lg rounded hover:bg-blue-100 transition ${
                index === activeIndex
                  ? "bg-white text-blue-700 font-semibold border-blue-600"
                  : ""
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{item.icon}</span>
                {item.title}
              </span>
              {index === activeIndex && <span>➜</span>}
            </div>
          ))}
        </div>

        {/* Display Area */}
        <div className="w-full md:w-2/3 md:pl-6">
          <img
            src={activeItem.image}
            alt={activeItem.title}
            className="rounded-lg shadow-lg w-full h-52 sm:h-64 md:h-80 object-cover"
          />
          <div className="bg-blue-700 text-white mt-4 p-4 rounded">
            <h2 className="text-lg md:text-xl font-bold">{activeItem.title}</h2>
            <p className="mt-1 text-sm md:text-base">
              {activeItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryData;
