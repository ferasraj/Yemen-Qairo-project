import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      rtl={true}
      theme="colored"
      toastStyle={{
        fontFamily: "Tajawal, sans-serif",
        fontSize: "16px",
        textAlign: "right",
        direction: "rtl",
        backgroundColor: "#ffba00", // لون خلفية أصفر مطابق للهوية
        opacity: 0.8, // شفافية خفيفة
        color: "#1a1a1a", // نص بلون داكن للقراءة
        padding: "12px 20px", // زيادة التباعد داخل التوست
        borderRadius: "8px", // زوايا دائرية أنيقة
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)", //
      }}
    />
  );
};

export default CustomToast;
