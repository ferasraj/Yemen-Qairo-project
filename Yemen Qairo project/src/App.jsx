import About from "./components/About";
import Contact from "./components/Contact";
import CustomToast from "./components/CustomToast";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton ";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      {/* Custom Toast component for notifications */}
      <CustomToast />
    </div>
  );
};

export default App;
