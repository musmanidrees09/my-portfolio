import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-12">
          I am currently available for freelance work or full-time positions.
          <br /> Based in Lahore, Pakistan.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          {/* Phone Card */}
          <a
            href="tel:+923096134235"
            className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition flex items-center justify-center gap-4"
          >
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <p className="text-sm text-gray-400">Call Me</p>
              <p className="font-bold">+92 309 6134235</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:musmanidrees08@gmail.com"
            className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition flex items-center justify-center gap-4"
          >
            <span className="text-2xl">✉️</span>
            <div className="text-left">
              <p className="text-sm text-gray-400">Email Me</p>
              <p className="font-bold">musmanidrees08@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
