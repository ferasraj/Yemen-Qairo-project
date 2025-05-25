import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  console.log("", motion);
  return (
    <div
      className="  min-h-screen min-w-screen  bg-cover bg-center flex items-center w-full 
    overflow-hidden scroll-mt-[100px] "
      style={{ backgroundImage: "url('./header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: true }}
        className="container text-center mx-auto px-6 py-4 md:px-20 lg:px-24 text-white"
      >
        <h2 className="leading-tight  text-5xl sm:text-6xl md:text-[82px] inline-block mb-4 max-w-3xl font-semibold pt-20">
          بصمة يمنية في قلب العاصمة المصرية
        </h2>
        <div className="  space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-6 py-1 rounded hover:bg-white hover:text-black transition duration-300 "
          >
            مشاريعنا
          </a>

          <a
            href="#Contact"
            className="bg-primary px-6 py-1 rounded  hover:opacity-90 transition duration-300 "
          >
            اتصل بنا
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
