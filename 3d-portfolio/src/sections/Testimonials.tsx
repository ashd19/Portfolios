import React from "react";
import { testimonials } from "../constants/index.ts";  // adjust path as needed
import CardModal from "./CardModal.tsx";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Testimonials</h2>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            What people have to say about our journey together
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t:any, index:any) => (
            <CardModal
              key={index}
              name={t.name}
              mentions={t.mentions}
              review={t.review}
              imgPath={t.imgPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
