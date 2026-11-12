import React, { type FormEvent } from "react";

const TestimonialsSection: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="testimonials" className="bg-[#f4f5f7] px-6 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-electric">
          Clients
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
          Worked with us? Leave a note
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="testimonial" className="mb-2 block text-sm font-medium text-navy">
              Your note
            </label>
            <textarea
              id="testimonial"
              rows={4}
              placeholder="What changed after we shipped?"
              className="w-full rounded-xl border border-navy/15 bg-white p-4 text-navy outline-none focus:border-electric"
              required
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-navy/15 bg-white p-4 text-navy outline-none focus:border-electric"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-navy">
                Role
              </label>
              <input
                id="role"
                type="text"
                placeholder="Title, company"
                className="w-full rounded-xl border border-navy/15 bg-white p-4 text-navy outline-none focus:border-electric"
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary"
          >
            Send testimonial
          </button>
        </form>
      </div>
    </section>
  );
};

export default TestimonialsSection;
