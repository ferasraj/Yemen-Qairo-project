import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  console.log("", motion);

  const StatBox = ({ end, suffix, text }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1, // تم تخفيض الثreshold لتفعيل الحركة أبكر
      rootMargin: "-50px 0px", // تحفيز العد قبل وصول العنصر بـ 50px
    });
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
      if (inView && !startCount) {
        setStartCount(true);
      }
    }, [inView, startCount]);

    // إضافة useEffect للتأكد من تشغيل العد عند التحميل لو العنصر ظاهر
    useEffect(() => {
      if (!startCount) {
        const rect = ref.current?.getBoundingClientRect();
        if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setStartCount(true);
        }
      }
    }, [ref, startCount]);

    return (
      <div ref={ref} className="stat-box">
        <p className="font-IBM-Plex sm:text-4xl text-2xl font-light text-gray-800 text-center md:text-start">
          {startCount ? (
            <CountUp
              end={end}
              duration={2.5}
              suffix={suffix}
              delay={0.1}
              enableScrollSpy // هذه السطر السحري!
              scrollSpyDelay={100} // تأخير بدء العد عند السكرول
              easingFn={(t, b, c, d) =>
                c * Math.sin((t / d) * (Math.PI / 2)) + b
              } // حركة ساين أكثر سلاسة
              formattingFn={(value) => `${value.toLocaleString()}${suffix}`} // تنسيق الأرقام
            />
          ) : (
            `0${suffix}`
          )}
        </p>
        <p className="sm:text-xl text-center md:text-start">{text}</p>
      </div>
    );
  };

  return (
    <section id="About" className="py-0 bg-gray-50">
      {/* العنوان والشعار */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        className="flex flex-col items-center justify-center container mx-auto 
    p-14 pt-10 md:px-20 lg:px-32 w-full overflow-hidden scroll-mt-[100px] "
      >
        <div className="text-center mb-5">
          <h1 className="font-tajawal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            عن الشركة
          </h1>
          <div className="w-20 h-[2px] bg-[#ffba00] mx-auto"></div>
        </div>
        <p className="text-[#e0a800] max-w-80 mb-12 text-center text-xl">
          شغوفون بالعقارات ... ملتزمون برؤيتك
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start 2xl:gap-10  md:gap-20">
          {/* الصورة العادية */}
          <img
            src={assets.brand_img}
            alt="Our Brand"
            className="hidden lg:block w-full sm:w-1/2 max-w-lg"
          />

          {/* الصورة الثانية */}
          <img
            src={assets.xl_brand_img}
            alt="Our Brand XL"
            className="block lg:hidden w-full sm:w-1/2 max-w-lg"
          />

          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600">
            {/* تطبيق دالة تحريك الالرقام */}
            <div
              className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 justify-items-center 
  md:justify-items-start lg:mt-8"
            >
              <StatBox end={10} suffix="&nbsp;+" text="سنوات من خبرة" />
              <StatBox end={12} suffix="&nbsp;+" text="مشاريع مكتملة" />
              <StatBox end={99} suffix="&nbsp;%" text="سرعة في الأداء" />
              <StatBox end={30} suffix="&nbsp;+" text="مشاريع قادمة" />
            </div>

            <p className="font-tajawal hidden xl:block my-10 max-w-lg text-justify px-4 md:px-0">
              في شركة يمن كايرو نؤمن بأن الاستثمار الحقيقي هو الذي يترك أثراً
              مستدامًا في حياة الناس والمجتمعات. نحن لا نبني مجرد مشاريع، بل
              نصنع مستقبلًا يرتكز على الجودة، والمصداقية، والرؤية الواضحة. نسعى
              لأن نكون شركاء موثوقين في رحلتكم نحو الفرص العقارية الواعدة. وبثقة
              عملائنا، نستمر في التوسّع بخطى ثابتة نحو الريادة في مجال الاستثمار
              والتطوير العقاري...
              <p className=" text-end font-cairo  text-primary font-black mt-8">
                رئيس مجلس الإدارة
              </p>
            </p>
            <p className="font-tajawal block xl:hidden my-6 max-w-lg text-justify px-4 md:px-0">
              في شركة يمن كايرو نؤمن بأن الاستثمار الحقيقي هو الذي يترك أثراً
              مستدامًا في حياة الناس والمجتمعات. نحن لا نبني مجرد مشاريع، بل
              نصنع مستقبلًا يرتكز على الجودة، والمصداقية، والرؤية الواضحة...
              <p className=" text-end font-cairo text-[14px] text-primary font-black mt-3">
                رئيس مجلس الإدارة
              </p>
            </p>

            <a
              href="#About"
              className="group inline-flex items-center gap-2 text-[#e0a800] font-semibold border-b-2 border-[#e0a800] hover:gap-3 transition-all duration-300"
            >
              اكتشف المزيد عنّا
              <i className="fas fa-arrow-left group-hover:ms-1 transition-all duration-300"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
