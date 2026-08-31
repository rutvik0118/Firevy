import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import testimonialApi from '../../services/testimonialApi';

export const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await testimonialApi.getTestimonials();
        setTestimonials(res.data || []);
      } catch (err) {
        console.error('[Testimonial Fetch Error]', err);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials, isPaused]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <Container>
        <SectionHeading
          badge="CLIENT SUCCESS STORIES"
          title="What Enterprise Leaders Say About Partnering With Us"
          subtitle="Don't just take our word for it—read feedback from technology officers and product founders worldwide."
        />

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-card/80 border border-gray-800 shadow-2xl backdrop-blur-xl"
        >
          <Quote className="absolute top-8 left-8 w-16 h-16 text-blue-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center space-y-6 relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic max-w-2xl">
                "{current.review}"
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-4 pt-2">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/50 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-base font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{current.designation}, <span className="text-slate-400">{current.company}</span></p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-800">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-gray-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-gray-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
