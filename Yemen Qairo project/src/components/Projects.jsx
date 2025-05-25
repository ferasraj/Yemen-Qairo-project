import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  console.log("", motion);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    // اسحب لليسار → next
    if (distance > 50) {
      nextProject();
    }

    // اسحب لليمين ← prev
    if (distance < -50) {
      prevProject();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-0 bg-gray-50 " id="Projects">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        className="container mx-auto 
    p-14 pt-10 md:px-20 lg:px-32 w-full overflow-hidden"
      >
        {/* العنوان والشعار */}
        <div className="flex flex-col items-center justify-center text-center mb-5">
          <h1 className="font-tajawal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مشاريعنا الحالية
          </h1>
          <div className="w-20 h-[2px] bg-[#ffba00]"></div>
          <p className="text-[#e0a800] max-w-80 mt-4 text-xl mb-12">
            من الفكرة إلى الإنجاز ... نُجسد الرؤية ونبني المستقبل
          </p>
        </div>
        {/* slider buttons */}
        <div className="flex justify-end items-center mb-8">
          <button
            onClick={nextProject}
            className="p-3 bg-gray-100 rounded mr-2 cursor-pointer"
            aria-label="Next Project"
          >
            <img src={assets.right_arrow} alt="Next" />
          </button>
          <button
            onClick={prevProject}
            className="p-3 bg-gray-100 rounded mr-2 cursor-pointer"
            aria-label="Previous Project"
          >
            <img src={assets.left_arrow} alt="Previous" />
          </button>
        </div>
        {/* project slider container */}
        <div
          className="overflow-hidden "
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-8  transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(+${(currentIndex * 80) / cardsToShow}%)`,
            }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative overflow-x-hidden  box-border flex-shrink-0 w-full  md:w-1/2 lg:w-1/3 xl:w-1/4"
                style={{
                  width:
                    window.innerWidth >= 1024
                      ? "25%" // ثلاث كروت
                      : window.innerWidth >= 768
                      ? "100%" // كرتين
                      : "100%", // كرت واحد
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] mb-14 "
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center ">
                  <div className="inline-block bg-white w-3/3.5 px-4 py-2 shadow-md ">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span>{" "}
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
