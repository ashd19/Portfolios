import  { useState } from 'react';
import {  Quote } from 'lucide-react';

import { testimonials } from '../constants/index';


const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  
  return (
    <div   id="testimonials"  className="min-h-screen bg-black text-white relative">
      {/* Header */}
      

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm text-white/70 font-medium">Testimonials</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Social proof section title that<br />
            focuses on trust and results
          </h1>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Write a brief introduction that sets up your testimonials' credibility. Mention
            key outcomes, iwndustry relevance, or the scale of your success.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/20 ${
                hoveredCard === index ? 'scale-105 -translate-y-2' : ''
              }`}
              // onMouseEnter={() => setHoveredCard(testimonial.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Quote className="w-4 h-4 text-black" />
              </div>

              <div className="p-8">
                {/* Quote Text */}
                <p className="text-white/80 leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.imgPath}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                      {testimonial.mentions}
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none"></div>
    </div>
  );
};

export default Testimonials;