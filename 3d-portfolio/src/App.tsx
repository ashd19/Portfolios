import Hero from "./sections/Hero";
//src/assets/constants/avatar-group-demo.tsx
import Projects from "./sections/Projects";
import NavBar from "./sections/NavBar";
import Testimonials from "./sections/Testimonials";
import Resume from "./sections/Resume";
import Contact from "./sections/ContactForm";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
     
        <NavBar />
        <div className="mt-40"></div>
        <Hero />
        {/* project section */}
        <div className="mt-50">
          <Projects />
        </div>
        <Experience/>
        <Testimonials />
        <div className="">
          <Resume />
        </div>
        <Contact />
     
    </>
  );
};

export default App;
