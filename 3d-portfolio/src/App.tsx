import Hero from "./sections/Hero";
//src/assets/constants/avatar-group-demo.tsx
import Projects from "./sections/Projects";
import NavBar from "./sections/NavBar";
import IntroBar from "./sections/IntroBar";
import Testimonials from "./sections/Testimonials";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="mt-40">
        <IntroBar />
      </div>
      <Hero />
      {/* project section */}
      <Projects />
      <Testimonials />
    </>
  );
};

export default App;
