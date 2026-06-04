import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! Your message has been sent successfully.`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-20 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col text-left" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex flex-col space-y-3 mb-6">
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-text font-serif leading-[1.15] tracking-tight">
                Let's Build Something Magnificent Together
              </h2>
            </div>

            <p className="text-text/70 text-base leading-relaxed font-light mb-8">
              Have a project in mind or need expert consultation? Contact our friendly team and let's explore how we
              can turn your architectural dreams into reality.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-4 p-5 bg-white border border-gray-300 rounded-2xl transition-all duration-300">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#81C784]/10 text-[#4CAF50] shrink-0 mt-0.5">
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Chat to sales</h4>
                  <p className="text-xs text-text/60 font-light">Speak to our friendly sales team.</p>
                  <a
                    href="https://wa.me/918129480780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary text-sm hover:text-gold transition-colors block pt-1"
                  >
                    8129480780
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-gray-300 rounded-2xl transition-all duration-300">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFD54F]/10 text-gold shrink-0 mt-0.5">
                  <i className="fa-solid fa-envelope text-lg"></i>
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Chat to support</h4>
                  <p className="text-xs text-text/60 font-light">We are here to help and support you.</p>
                  <a
                    href="mailto:info@cubikbuilders.com"
                    className="font-bold text-primary text-sm hover:text-gold transition-colors block pt-1"
                  >
                    info@cubikbuilders.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-gray-300 rounded-2xl transition-all duration-300">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#90CAF9]/10 text-primary shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Visit us</h4>
                  <p className="text-xs text-text/60 font-light">Visit our main office headquarters.</p>
                  <p className="text-primary font-medium text-xs leading-relaxed pt-1">
                    Room No: X/449Q, Second Floor, G O Tower, Peramangalam, Thrissur - 680545
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-gray-300 rounded-2xl transition-all duration-300">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#90CAF9]/10 text-primary shrink-0 mt-0.5">
                  <i className="fa-solid fa-phone text-lg"></i>
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-dark text-sm tracking-wide uppercase">Call us</h4>
                  <p className="text-xs text-text/60 font-light">Call our direct lines at any time.</p>
                  <a
                    href="tel:+918129480780"
                    className="font-bold text-primary text-sm hover:text-gold transition-colors block pt-1"
                  >
                    8129480780
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-white p-8 md:p-12 rounded-[1rem] lg:rounded-[2rem] border border-gray-300 shadow-xl text-left">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs font-bold tracking-wider uppercase text-dark">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label class="text-xs font-bold tracking-wider uppercase text-dark">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-dark">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-dark">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-dark">Project Type</label>
                  <div className="relative w-full">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300 appearance-none cursor-pointer pr-12"
                    >
                      <option value="" disabled className="hidden">
                        Select Project Type
                      </option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Architecture</option>
                      <option value="interior">Interior Redesign</option>
                      <option value="landscape">Landscape Architecture</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text/50">
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold tracking-wider uppercase text-dark">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg border border-gray-200 focus:border-gold focus:outline-none px-5 py-4 rounded-xl text-sm text-dark transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-gold text-white hover:text-dark py-5 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="mt-20 lg:mt-24 w-full h-[400px] sm:h-[480px] rounded-t-[2rem] overflow-hidden shadow-xl border border-gray-100 relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.9056263591965!2d76.1738734!3d10.581898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef0015555555%3A0x1c1e5cbdbcb8eb8f!2sPeramangalam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-full border-0 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
