import { useState } from "react";
import { toast } from "react-toastify";

import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt as MapPinIcon,
  FaPhoneAlt as PhoneIcon,
  FaEnvelope as EnvelopeIcon,
  FaClock as ClockIcon,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mvgajggb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      if (res.ok) {
        toast.success("تم الاشتراك بنجاح! 🎉");
        setEmail("");
      } else {
        toast.error("حدث خطأ، حاول مرة أخرى.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("حدث خطأ أثناء الإرسال.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        {/* الأقسام الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* القسم 1: الشعار والمعلومات */}
          <div className="space-y-6">
            <img src={assets.logo} alt="Logo" className="w-55  " />
            <p className="text-gray-400 leading-relaxed">
              نقدم حلولاً استثمارية عقارية مبتكرة في القاهرة ، نلتزم بالجودة
              والشفافية لبناء مستقبل أفضل.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  name: "facebook",
                  url: "https://facebook.com/YemenCairo1",
                },
                {
                  name: "instagram",
                  url: "https://instagram.com/yemencairo.r.i",
                },
                {
                  name: "youtube",
                  url: "https://youtube.com/@yemencairo3072",
                },
                {
                  name: "whatsapp",
                  url: "https://wa.me/201117962222", // استبدل برقم الهاتف الفعلي
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank" // يفتح الرابط في تبويب جديد
                  rel="noopener noreferrer" // لأمان أفضل
                  className="bg-[#ffba00]/10 hover:bg-[#ffba00] text-[#ffba00] hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {social.name === "facebook" && (
                    <FaFacebookF className="w-5 h-5" />
                  )}
                  {social.name === "instagram" && (
                    <FaInstagram className="w-5 h-5" />
                  )}
                  {social.name === "youtube" && (
                    <FaYoutube className="w-5 h-5" />
                  )}
                  {social.name === "whatsapp" && (
                    <FaWhatsapp className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* القسم 2: روابط سريعة */}
          <div>
            <h3 className=" text-xl font-bold mb-6 text-[#ffba00] border-b border-[#ffba00]/30 pb-2">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", link: "#" },
                { label: "عن الشركة", link: "/#About" },
                { label: "المشاريع", link: "/#Projects" },
                { label: "تقييمات عملاء", link: "/#Testimonials" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="text-gray-400 hover:text-[#ffba00] transition-colors duration-300 flex items-center"
                  >
                    <span className="ml-2">→</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم 3: معلومات التواصل */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffba00] border-b border-[#ffba00]/30 pb-2">
              تواصل معنا
            </h3>
            <ul className="space-y-4 ">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-[#e0a800] mt-1 mr-2" />
                <span className="text-gray-400 mr-1">القاهرة، جمهورية مصر</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-[#e0a800] mt-1 mr-2" />
                <span className="text-gray-400 mr-1">20-111-796-2222+</span>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 text-[#e0a800] mt-1 mr-2" />
                <span className="text-gray-400 mr-1 ">
                  YemenCairo.R.I@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-5 h-5 text-[#e0a800] mt-1 mr-2" />
                <span className="text-gray-400 mr-1">
                  الأحد - الخميس: 8ص - 4م
                </span>
              </li>
            </ul>
          </div>

          {/* القسم 4: النشرة البريدية */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#ffba00] border-b border-[#ffba00]/30 pb-2">
              النشرة البريدية
            </h3>
            <p className="text-gray-400 mb-4">
              اشترك ليصلك كل جديد عن مشاريعنا وعروضنا الحصرية
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-[#ffba00]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer bg-gradient-to-r from-[#ffba00] to-[#e0a800] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
              >
                {isSubmitting ? "جاري الإرسال..." : "اشترك الآن"}
              </button>
            </form>
          </div>
        </div>

        {/* حقوق النشر */}
        <div
          className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between 
        items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} YemenCairo.RI جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#ffba00] text-sm">
              شروط الخدمة
            </a>
            <a href="#" className="text-gray-500 hover:text-[#ffba00] text-sm">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
