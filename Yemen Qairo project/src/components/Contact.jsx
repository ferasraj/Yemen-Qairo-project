import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  console.log("", motion);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // دالة التحقق من صحة البريد الإلكتروني
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // إشعارات النجاح والخطأ
  const notifySuccess = () => toast.success("تم إرسال الرسالة بنجاح");
  const notifyError = () => toast.error("حدث خطأ أثناء إرسال الرسالة");

  // دالة التحقق عند الإرسال
  const validateForm = () => {
    const newErrors = {};

    // التحقق من الاسم الثلاثي
    const nameParts = formData.name
      .trim()
      .split(" ")
      .filter((p) => p !== "");
    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    } else if (nameParts.length < 3) {
      newErrors.name = "يرجى إدخال الاسم الثلاثي";
    }

    // التحقق من البريد الإلكتروني
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = "صيغة البريد غير صحيحة";
    }

    // التحقق من رقم الهاتف (يسمح بـ + وأرقام، بدون فراغات أو شرطات)
    if (formData.phone.trim()) {
      const cleanedPhone = formData.phone.trim().replace(/[\s-]/g, "");
      const phoneRegex = /^(\+?\d{7,15})$/;
      if (!phoneRegex.test(cleanedPhone)) {
        newErrors.phone = "رقم الهاتف غير صحيح (يجب أن يحتوي على أرقام فقط)";
      }
    }

    // التحقق من الرسالة (10 كلمات على الأقل)
    const wordCount = formData.message
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    } else if (wordCount < 10) {
      newErrors.message = "يرجى كتابة رسالة لا تقل عن 10 كلمات";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // معالجة الإرسال
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    emailjs
      .send(
        "service_6y4icki", // Service ID
        "template_23nznpw", // Template ID
        formData,
        "diTh2JCVNAtzQCvbU" // Public Key
      )
      .then(
        (result) => {
          console.log("تم الإرسال:", result.text);
          notifySuccess();
          setFormData({ name: "", email: "", phone: "", message: "" });
          setErrors({});
          setIsLoading(false);
        },
        (error) => {
          console.error("حدث خطأ:", error.text);
          notifyError();
          setIsLoading(false);
        }
      );
  };

  // دوال التحقق في onChange لإزالة الخطأ عند تحقق الشرط فقط

  const handleNameChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, name: val }));

    const nameParts = val
      .trim()
      .split(" ")
      .filter((p) => p !== "");
    if (val.trim() && nameParts.length >= 3) {
      setErrors((prev) => ({ ...prev, name: null }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, email: val }));

    if (val.trim() && isValidEmail(val.trim())) {
      setErrors((prev) => ({ ...prev, email: null }));
    }
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, phone: val }));

    const cleanedPhone = val.trim().replace(/[\s-]/g, "");
    const phoneRegex = /^(\+?\d{7,15})$/;
    if (!val.trim() || phoneRegex.test(cleanedPhone)) {
      setErrors((prev) => ({ ...prev, phone: null }));
    }
  };

  const handleMessageChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, message: val }));

    const wordCount = val.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount >= 10) {
      setErrors((prev) => ({ ...prev, message: null }));
    }
  };

  return (
    <section className="py-0 bg-gray-50" id="Contact">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        className=" flex flex-col justify-center container mx-auto 
   pb-10 p-5  pt-10 md:px-20 lg:px-32 w-full overflow-hidden"
      >
        {/* العنوان والشعار */}
        <div className="flex flex-col items-center justify-center text-center mb-5">
          <h1 className="font-tajawal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h1>
          <div className="w-20 h-[2px] bg-[#ffba00]"></div>
          <p className="text-[#e0a800] max-w-80 mt-4 text-xl mb-12">
            جاهز للخطوة التالية؟ ... خلينا نبني مستقبلك مع بعض!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* نموذج التواصل */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
              {/* الاسم */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="form"
                  placeholder="أدخل اسمك"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* البريد والهاتف */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    className="form"
                    placeholder="example@domain.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="form"
                    placeholder="+20 123 456 7890"
                  />
                  {errors.phone && (
                    <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* الرسالة */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleMessageChange}
                  className="form"
                  placeholder="أكتب رسالتك هنا..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer w-full bg-primary text-white font-bold py-3 px-6 rounded-lg 
                  transition duration-300 hover:opacity-90 
                  focus:outline-none focus:ring-2 focus:ring-primary/80 
                  active:scale-95 active:opacity-95"
              >
                {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>
            </form>
          </div>

          {/* معلومات التواصل */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className=" text-2xl font-bold text-gray-800 mb-6">
              معلومات التواصل
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-gray-200/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#e0a800]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="mr-2  overflow-hidden">
                  <h3 className="font-bold font-tajawal text-gray-800 ">
                    البريد الإلكتروني
                  </h3>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=YemenCairo.R.I@gmail.com&su=استفسار%20من%20الموقع&body=مرحبًا%D8%8C%20لدي%20استفسار%20بخصوص..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    YemenCairo.R.I@gmail.com
                  </a>
                </div>
              </div>
              {/* Tel */}
              <div className="flex items-start">
                <div className="bg-gray-200/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#e0a800]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <h3 className="font-bold font-tajawal text-gray-800">
                    الهاتف
                  </h3>
                  <a
                    href="tel:+201117962222"
                    className="text-gray-600 hover:underline"
                  >
                    20-111-796-2222+
                  </a>{" "}
                </div>
              </div>
              {/* Add */}
              <div className="flex items-start">
                <div className="bg-gray-200/20 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-[#e0a800]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="mr-2">
                  <h3 className="font-bold font-tajawal text-gray-800">
                    العنوان
                  </h3>
                  <p className="text-gray-600">جمهورية مصر العربية ، القاهرة</p>
                </div>
              </div>
            </div>

            {/* خرائط جوجل (مثال) */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Cairo,%20Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
