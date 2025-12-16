import React, { type FormEvent } from "react";

// interface Testimonial {
//   id: number;
//   text: string;
//   name: string;
//   role: string;
// }


const TestimonialsSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Later, you can handle submission here (API or Firebase)
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-16 bg-white backdrop-blur-md"
    >
     

        {/* --- Testimonial Submission Form --- */}
        <div className="p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-[inset_0_3px_6px_rgba(255,255,255,0.6),_inset_0_-3px_8px_rgba(0,0,0,0.2)] max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-black mb-6">
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
                className="w-full rounded-xl bg-white/80 border border-black/30 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-black resize-none"
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
                  className="w-full rounded-xl bg-white/80 border border-black/30 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-black"
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
                  className="w-full rounded-xl bg-white/80 border border-black/30 text-gray-800 p-4 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center px-10 py-2 text-base font-bold rounded-full text-white bg-black hover:bg-gray-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.45),_inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:scale-[1.05]"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      
    </section>
  );
};

export default TestimonialsSection;
