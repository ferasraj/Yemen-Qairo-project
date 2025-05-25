import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  console.log("", motion);

  return (
    <section className="py-0 bg-gray-50 " id="Testimonials">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        className="container mx-auto 
    p-14 pt-10 md:px-20 lg:px-32 w-full overflow-hidden"
      >
        {/* العنوان والشعار */}
        <div className="flex flex-col items-center justify-center text-center mb-5">
          <h1 className="font-tajawal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            آراء عملائنا
          </h1>
          <div className="w-20 h-[2px] bg-[#ffba00]"></div>
          <p className="text-[#e0a800] max-w-80 mt-4 text-xl mb-12">
            قصص واقعية من أشخاص حققوا حلم السكن معنا
          </p>
        </div>
        <div className="flex flex-wrap justify-center  gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className=" max-w-[340px] border  border-gray-300 
               bg-white shadow-lg rounded  px-8 py-12 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4 blur-xs"
              />

              <h2 className="text-xl font-medium text-gray-700">
                {testimonial.name}
              </h2>
              <p className="text-gray-500 mb-4 text-sm font-tajawal">
                {testimonial.title}
              </p>
              <div className="flex justify-center gap-1 text-red-500 mb-4 ">
                {Array.from({ length: testimonial.rating }, (items, index) => (
                  <img key={index} src={assets.star_icon} />
                ))}
              </div>
              <p className="text-gray-600 font-tajawal text-lg ">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
