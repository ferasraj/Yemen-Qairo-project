import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
      opacity-20 translate-y-5   fixed bottom-8 right-4 z-[999] w-10 h-10 
        rounded-full flex items-center justify-center 
        text-white text-lg shadow-lg transition-all duration-300 
        ease-in-out transform-gpu 
        ${
          visible
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-5 invisible"
        }
        bg-primary hover:bg-gray-800 focus:bg-gray-800 cursor-pointer hover:scale-110

         md:bottom-10 md:right-3 md:w-10 md:h-10 md:text-sm
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
