

type CustomButtonProps = {
  className: string;
  text: string;
  id: string;
};

const CustomButton = ({ className, text, }: CustomButtonProps) => {
  return (
    <a
     href="#projects"
      className={` ${className ?? ""} cta-wrapper`}
      // onClick={(e) => {
      //   e.preventDefault();
      //   const target = document.getElementById("seeMyWorkButton");
      // //   if (target && id) {
      // //     const offset = window.innerHeight * 0.15;
      // //     const top =
      // //       target.getBoundingClientRect().top + window.scrollY - offset;

      // //     window.scrollTo({ top, behavior: "smooth" });
      // //   }
      // // }}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          {/* <img src="../assets/public/images/arrow.svg" alt="arrow" /> */}
        </div>
      </div>
    </a>
  );
};

export default CustomButton;
