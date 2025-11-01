import React, { type FormEvent } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with Granville Technologies was an exceptional experience — from planning to deployment, everything was seamless.",
    name: "Sarah Thompson",
    role: "CTO, Nova Systems",
  },
  {
    id: 2,
    text: "Their attention to detail and design thinking helped us transform our product into something truly world-class.",
    name: "Michael O’Connor",
    role: "Product Designer, PixelWave",
  },
];

const TestimonialsSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Later, you can handle submission here (API or Firebase)
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-blue-50/40 to-blue-100/30 backdrop-blur-md"
    >
     

        {/* --- Testimonial Submission Form --- */}
        <div className="p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),_inset_0_-3px_8px_rgba(0,0,0,0.2)] max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="testimonial"
                className="block text-sm font-semibold text-gray-500 mb-2"
              >
                Your Testimonial
              </label>
              <textarea
                id="testimonial"
                rows={4}
                placeholder="Tell us about your experience..."
                className="w-full rounded-xl bg-white/60 border border-blue-100 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-500 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-white/60 border border-blue-100 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-gray-500 mb-2"
                >
                  Your Role / Position
                </label>
                <input
                  id="role"
                  type="text"
                  placeholder="Software Engineer, Nova Systems"
                  className="w-full rounded-xl bg-white/60 border border-blue-100 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center px-10 py-2 text-base font-bold rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),_inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:scale-[1.05]"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      
    </section>
  );
};

export default TestimonialsSection;
