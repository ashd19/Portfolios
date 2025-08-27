import Hero from './sections/Hero';
import { useState } from 'react';
import { CodeEditor } from './components/animate-ui/components/code-editor';
import { FaReact } from 'react-icons/fa'; // Changed to a more common React icon

const App = () => {
  const [isPopupCodeVisible, setIsPopupCodeVisible] = useState(false);

  // Function to show an alert
  const saidhi = () => {
    alert("hi");
  };

  // Function to toggle the visibility of the CodeEditor
  const handlePopupToggle = () => {
    setIsPopupCodeVisible(!isPopupCodeVisible);
  };

  return (
    <>
      <div className="flex justify-center gap-3 items-center relative">
        <button 
          onClick={saidhi} 
          className='mt-2 flex justify-center items-center bg-blue-200 text-black rounded-full px-4 py-2 text-sm hover:bg-blue-300 transition-colors'
        >
          <FaReact className="mr-2" />
          Say hi!
        </button>
        
        <h1 className='text-white text-xl font-semibold mt-3'>
          {4} People Have said hi
        </h1>
        
        <h1 
          onClick={handlePopupToggle} 
          className='text-white text-xl font-semibold mt-3 cursor-pointer hover:text-blue-300 transition-colors underline'
        >
          Click here to see Bio
        </h1>
      </div>

      {/* Popup overlay */}
      {isPopupCodeVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-4xl max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">My Bio Code</h2>
              <button 
                onClick={handlePopupToggle} 
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
                <CodeEditor
      cursor
      className="w-[640px] h-[480px]"
      lang="tsx"
      title="component.tsx"
      icon={<FaReact />}
      duration={15}
      delay={0.5}
      copyButton
    >
      {`'use client';
 
import * as React from 'react';
 
type MyComponentProps = {
  myProps: string;
} & React.HTMLAttributes<HTMLDivElement>;
 
const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ myProps, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <p>My Component</p>
      </div>
    );
  },
);
MyComponent.displayName = 'MyComponent';
 
export { MyComponent, type MyComponentProps };`}
    </CodeEditor>

          </div>
        </div>
      )}

      <Hero />
    </>
  );
};

export default App;