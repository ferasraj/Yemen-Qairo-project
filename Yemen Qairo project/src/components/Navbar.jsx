import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "ar", // لغة موقعك الأصلية
            includedLanguages: "en,ar", // اللغات المتاحة
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  // !انتبه
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Always clean up when component unmounts or dependency changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 text-lg">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-68 md:w-48" />

        {/* Links */}
        <ul className="hidden md:flex text-white md:gap-[10px] lg:gap-x-16">
          {[
            { to: "Header", label: "الرئيسية" },
            { to: "About", label: "عن الشركة" },
            { to: "Projects", label: "المشاريع" },
            { to: "Testimonials", label: "آراء العملاء" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
                className="group relative px-2 py-1 cursor-pointer text-white transition duration-300"
              >
                <span className="group-hover:text-[#e0a800] transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute right-0 bottom-0 h-[2px] w-0 bg-[#e0a800] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Language Switcher*/}

        {/* عنصر Google Translate (مخفي) */}
        <div id="google_translate_element" className="hidden"></div>

        <button
          onClick={() => {
            const select = document.querySelector(".goog-te-combo");
            if (select) {
              select.value = "en"; // غيّر إلى "ar" إذا تبغى ترجعة للعربي
              select.dispatchEvent(new Event("change"));
            }
          }}
          className="hidden md:flex items-center gap-2 text-white text-base font-normal 
  bg-white/10 hover:bg-white/20 cursor-pointer  transition-all duration-300 
  px-5 py-1.5 rounded-full border border-white/30 
  shadow-sm hover:shadow-md backdrop-blur-md"
        >
          <i className="fas fa-globe text-lg opacity-90"></i>
          <span className="tracking-wide">English</span>
        </button>
        {/* Mobile menu toggle */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden cursor-pointer w-8 rtl:scale-x-[-1]"
        />
      </div>
      {/* Mobile Nav */}
      <div
        className={`
    md:hidden fixed inset-0 z-50 bg-white/30 backdrop-blur-md text-black
    transform transition-all duration-500 ease-in-out
    ${
      showMobileMenu
        ? "translate-y-0 opacity-100"
        : "-translate-y-10 opacity-0 pointer-events-none"
    }
  `}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer mt-5"
            alt="Close Menu"
          />
        </div>

        {/* Navigation Links mobile */}
        <ul className="flex flex-col items-center gap-6 mt-8 px-6 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 inline-block rounded-full transition duration-300
             hover:bg-white/50 active:bg-white/20  w-full text-center"
          >
            الرئيسية
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 inline-block rounded-full transition duration-300
             hover:bg-white/50 active:bg-white/20  w-full text-center"
          >
            عن الشركة
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 inline-block rounded-full transition duration-300
             hover:bg-white/50 active:bg-white/20  w-full text-center"
          >
            مشاريعنا
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 inline-block rounded-full transition duration-300
             hover:bg-white/50 active:bg-white/20  w-full text-center"
          >
            آراء العملاء
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2 inline-block rounded-full transition duration-300
             hover:bg-white/50 active:bg-white/20  w-full text-center"
          >
            تواصل معنا
          </a>
          <button
            onClick={() => {
              setShowMobileMenu(false);
              const select = document.querySelector(".goog-te-combo");
              if (select) {
                select.value = "en";
                select.dispatchEvent(new Event("change"));
              }
            }}
            className="mt-8 w-full flex justify-center items-center gap-2 px-6 py-2 
  rounded-full text-white text-base font-normal
  bg-white/10 hover:bg-white/20 border border-white/30 
  backdrop-blur-md shadow-sm hover:shadow-md 
  transition-all duration-300  active:bg-white/30 cursor-pointer "
          >
            <i className="fas fa-globe text-lg opacity-90"></i>
            <span className="tracking-wide">English</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
