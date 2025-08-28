import Hero from "./sections/Hero";
 //src/assets/constants/avatar-group-demo.tsx
import Projects from "./sections/Projects";
import NavBar from "./sections/NavBar";
import IntroBar from "./sections/IntroBar";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="mt-">
        <IntroBar />
      </div>
      <Hero />
      {/* project section */}
      <Projects />
    </>
  );
};

export default App;
