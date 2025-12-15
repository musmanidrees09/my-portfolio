// 1. We don't need to import React in modern Next.js, but it's good practice to know it exists.

const Hero = () => {
  return (
    // 2. This looks like HTML, but it is JSX (JavaScript XML).
    // Rule: You cannot use 'class', you must use 'className' because 'class' is a reserved word in JS.
    <section className="h-screen flex flex-col justify-center items-center text-center bg-slate-900 px-4">
      {/* 3. Tailwind: text-blue-400 = color: #60a5fa */}
      <p className="text-blue-400 font-medium mb-4 tracking-wide">HELLO, I'M</p>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        Muhammad Usman
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
        Full Stack Developer
      </h2>
    </section>
  );
};

// 4. Exporting it so the 'Parent' (page.js) can use it.
export default Hero;
