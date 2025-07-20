import { useState } from "react";
import download1 from "../../assets/download1.jpeg";
import download2 from "../../assets/download2.jpeg";
import download3 from "../../assets/download3.jpeg";
import download4 from "../../assets/download4.jpeg";

const industryItems = [
  {
    title: "Healthcare",
    icon: "💙",
    image: download1,
    description: "Digital healthcare innovations for better outcomes.",
  },
  {
    title: "Banking & Financial Services",
    icon: "🏦",
    image: download2,
    description: "Secure and smart financial technology solutions.",
  },
  {
    title: "Insurance",
    icon: "🛡️",
    image: download3,
    description: "Modern insurance platforms for a digital age.",
  },
  {
    title: "Telecom",
    icon: "📡",
    image: download4,
    description: "Next-gen connectivity and customer experience.",
  },
  {
    title: "Media & Entertainment",
    icon: "📺",
    image: download1,
    description: "Robust portfolio of content management solutions.",
  },
];

const IndustryData = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industryItems[activeIndex]; 

  return (
    <div className="px-4 md:px-10 py-10">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl text-blue-800 font-semibold">
          INDUSTRY FOCUS
        </h2>
        <h1 className="mt-2 md:mt-3 text-2xl md:text-3xl font-bold text-black">
          Purpose-built, next-gen solutions grounded in deep industry expertise
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          From healthcare to finance, telecom to government bodies, we
          collaborate with clients across sectors to deliver innovative
          solutions that address unique challenges and drive sustainable growth.
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
