// import { useRef, useState } from "react";
import MyResume from "../../public/Ashtons_Resume.pdf";
const Resume = () => {
  //  only allow user to click once on each , ....
  // const hasViewedRef = useRef(false);
  // const hasDownloadedRef = useRef(false);
  // //     get from db  !!!
  // const [viewCounter, setViewCounter] = useState(0);
  // const [downloadsCounter, setDownloadsCounter] = useState(0);
  // function handleViewClick() {
  //   if (hasViewedRef.current) return; // value is true then already clicked ..

  //   setViewCounter((viewCounter) => viewCounter + 1);
  //   hasViewedRef.current = true;
  // }

  // function handleDowloadClick() {
  //   if (hasDownloadedRef.current) return;
  //   setDownloadsCounter((downloadsCounter) => downloadsCounter + 1);
  //   hasDownloadedRef.current = true;
  // }

  return (
    <div id="resume" className="flex justify-center gap-5 items-center mt-20">
      <button
        type="button"
        // onClick={handleViewClick}
        className="text-white bg-blue-700 w-80 h-20 text-2xl  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg font-bold px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <a href={MyResume} target="_blank">
          View Resume! <br />
          {/* Total clicks: {viewCounter} get from db */}
        </a>
      </button>
      <button
        type="button"
        // onClick={handleDowloadClick}
        className="focus:outline-none text-white bg-red-700 text-2xl w-80 h-20 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <a href={MyResume} download={MyResume}>
          Download PDF <br />
          {/* Total clicks: {downloadsCounter} */}
        </a>
      </button>
    </div>
  );
};

export default Resume;
