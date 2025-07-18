// import "react";
// import career from "../../assets/career.png";
// import slide1 from "../../assets/slide1.jpeg"
// import slide2 from "../../assets/slide2.jpeg"
// // import img1 from "../../assets/img1.jpeg";
// import img2 from "../../assets/img2.png";

// import { useState } from "react";

// const Careers = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Experience Infinite Possibilities\nWe Invest in Learning and Development",
//       text: "Every team member has a development plan that contains the activities, initiatives, and programs aimed to improve and enhance his or her capabilities. With corporate growth on a fast-track, our development plans are fluid enough to adapt to the changing business scenarios, enabling our workforce to remain best-in-class when it comes to putting technology and innovation to work with Ability, Aspiration, and Commitment.",
//       image: slide1, // Replace with your image path
//     },
//     // Add more slides as needed
//     {
//       title: "Slide 2 Title",
//       text: "Every team member has a development plan that contains the activities, initiatives, and programs aimed to improve and enhance his or her capabilities. With corporate growth on a fast-track, our development plans are fluid enough to adapt to the changing business scenarios, enabling our workforce to remain best-in-class when it comes to putting technology and innovation to work with Ability, Aspiration, and Commitment.",
//       image:slide2,
//     },
//   ];


//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };
//   return (
//     <div className="">
//       <div>
//         <img className="w-full" src={career} alt="career" />
//       </div>

//       <div className="flex items-center justify-center my-[100px] mx-10">
//         <div>
//           <h1 className="text-4xl font-bold mb-3 ">
//             india GPW Logo 2025 - 2026 The work we do impacts the world, and the
//             future
//           </h1>
//           <button className=" bg-blue-900 rounded-md px-4 py-2 text-white">Explore Jobs</button>
//         </div>

//         <div>
//           <h1 className="text-white bg-blue-900 px-8 py-3 text-2xl font-bold mb-4">Developer Intern</h1>
//           <h2 className="text-xl ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quo facilis labore ratione cumque iure, error, cum eveniet est recusandae, accusamus odit similique consectetur perspiciatis id nam harum laudantium velit.</h2>
//         </div>
//       </div>

//       <div className="relative mb-10 my-[100px]  mx-10">
//       <div className="flex items-center justify-between mb-[200px]">
//         <button
//           onClick={prevSlide}
//           className=" text-blue-500  text-2xl hover:text-gray-800 rounded-full border-2 border-blue-500 p-3 "
//         >
//           &lt;
//         </button>
//         <div className="flex items-center w-full">
//           <img
//             src={slides[currentSlide].image}
//             alt="Slide"
//             className="w-1/2 object-cover"
//           />
//           <div className="w-1/2 p-4">
//             <h2 className="text-3xl font-bold text-orange-600">
//               {slides[currentSlide].title.split('\n').map((line, index) => (
//                 <span key={index}>
//                   {line}
//                   <br />
//                 </span>
//               ))}
//             </h2>
//             <p className="mt-2 text-gray-700">{slides[currentSlide].text}</p>
//           </div>
//         </div>
//         <button
//           onClick={nextSlide}
//           className=" text-blue-500  text-2xl hover:text-gray-800 rounded-full border-2 border-blue-500 p-3 "
//         >
//           &gt;
//         </button>
//       </div>
//     </div>

//     <div className="w-full">
//       <img className="w-full" src={img2} alt="" />
//     </div>


//     <div className=" relative">
  
//       <div className=" absolute bottom-[200px] ml-[800px] bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center border border-gray-200">
//         <h3 className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
//           Join Our Team
//         </h3>
//         <h1 className="text-4xl font-bold text-gray-900 mt-2">
//           Can't find your job? Don't worry!
//         </h1>
//         <p className="text-gray-600 mt-4">
//           Our team will reach out to you when we have the opening.
//         </p>
//         <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
//           Submit Your Resume <span className="ml-1">&gt;</span>
//         </button>
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default Careers;


import "react";
import career from "../../assets/career.png";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import img2 from "../../assets/img2.png";
import { useState } from "react";

const Careers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Experience Infinite Possibilities\nWe Invest in Learning and Development",
      text: "Every team member has a development plan that contains the activities, initiatives, and programs aimed to improve and enhance his or her capabilities. With corporate growth on a fast-track, our development plans are fluid enough to adapt to the changing business scenarios, enabling our workforce to remain best-in-class when it comes to putting technology and innovation to work with Ability, Aspiration, and Commitment.",
      image: slide1,
    },
    {
      title: "Slide 2 Title",
      text: "Every team member has a development plan that contains the activities, initiatives, and programs aimed to improve and enhance his or her capabilities. With corporate growth on a fast-track, our development plans are fluid enough to adapt to the changing business scenarios, enabling our workforce to remain best-in-class when it comes to putting technology and innovation to work with Ability, Aspiration, and Commitment.",
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
    <div className="">
      <div>
        <img className="w-full object-cover max-h-[500px]" src={career} alt="career" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center my-24 mx-6 gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            India GPW Logo 2025 - 2026 The work we do impacts the world, and the future
          </h1>
          <button className="bg-blue-900 rounded-md px-6 py-2 text-white hover:bg-blue-800 mt-4">
            Explore Jobs
          </button>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded-md shadow-lg">
          <h1 className="text-xl font-bold mb-3">Developer Intern</h1>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo facilis labore ratione cumque iure, error, cum eveniet est recusandae, accusamus odit similique consectetur perspiciatis id nam harum laudantium velit.
          </p>
        </div>
      </div>

      <div className="relative mx-6 mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="text-blue-500 text-2xl hover:text-gray-800 rounded-full border-2 border-blue-500 p-3"
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
                {slides[currentSlide].title.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
              <p className="mt-4 text-gray-700 text-base leading-relaxed">
                {slides[currentSlide].text}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="text-blue-500 text-2xl hover:text-gray-800 rounded-full border-2 border-blue-500 p-3"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="w-full">
        <img className="w-full object-cover max-h-[600px]" src={img2} alt="" />
      </div>

      <div className="relative w-full px-6">
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center border border-gray-200">
          <h3 className="text-orange-600 text-sm font-semibold uppercase tracking-wide">
            Join Our Team
          </h3>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Can't find your job? Don't worry!
          </h1>
          <p className="text-gray-600 mt-4">
            Our team will reach out to you when we have the opening.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
            Submit Your Resume <span className="ml-1">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;

