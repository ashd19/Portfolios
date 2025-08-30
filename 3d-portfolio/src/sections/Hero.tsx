import { words } from "../constants";
import bg from "../assets/public/images/bg.png";
import CustomButton from "../components/CustomButton";
import HeroModel from "../components/3d-models/heroModel";
import IntroBar from "./IntroBar";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative overflow-hidden ">
        <div className="absolute top-0 left-0 z-10">
          <img src={bg} alt="hero-bg" />
        </div>
        <IntroBar />
        <div className="hero-layoout grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
          {/* left hero content : here the text will come */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-20">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    {" "}
                    {/* animation in index.css file , also wrapper */}
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 "
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>Into Real Projects</h1>
                <h1>That Deliver Results</h1>
              </div>
              <p className="text-white-50  md:text-xl relative z-10 pointer-events-none font-semibold text-xl">
                Hi, I'm Ashton. I'm a software engineer with a passion for
                creating minimal and pretty user interfaces , scalable backend
                systems , blockchain technology , overall I can work on anything
                , I believe no tech stack defines me , I create projects that
                are unique and I am always looking for new challenges. My Main
                and Current interest is in Blockhain technology in ethereum and
                Solana , Blockhain security , Backend systems .
              </p>
              <CustomButton
                className="md:w-80 md:h-16 w-60 h-12"
                id="seeMyWorkButton"
                text="See my work"
              />
            </div>
          </header>

          {/* right hero content  : here the 3d-model will come */}
          <figure className="w-300 h-300">
            {" "}
            <div className="hero-3d-layout ">
              <HeroModel />
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Hero;
