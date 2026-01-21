import { useEffect, useRef } from 'react';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      const content = document.getElementById('hero-content');
      if (content) {
        content.classList.remove('opacity-0', 'translate-y-8');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center gap-2 md:gap-4 min-h-screen">
        <div className="opacity-0 translate-y-8 transition-all duration-1000 flex flex-col gap-2 md:gap-4" id="hero-content">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <p className="text-lg md:text-xl text-purple-600 font-semibold">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <div className="animate-fade-in-up animation-delay-200 mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Ethan Ding
              </span>
            </h1>
          </div>


          {/* Title */}
          <div className="animate-fade-in-up animation-delay-400 mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
              Software Engineer | Full-Stack Developer | AI Enthusiast
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animation-delay-600 mb-12 md:mb-16">
            <p className="text-md md:text-md text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
              Building innovative solutions with cutting-edge technology. 
              Passionate about creating scalable applications and leveraging AI to solve complex problems.
            </p>
          </div>

          {/* CTA Buttons */}
          {/* <div className="animate-fade-in-up animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-blue-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg border-2 border-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-purple-50"
            >
              Get In Touch
            </a>
            <a
              href="mailto:yd3163@nyu.edu"
              className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
            >
              Email Me
            </a>
          </div> */}
        </div>

        {/* Scroll Indicator - Positioned separately */}
        <div className="animate-fade-in-up animation-delay-1000 mt-20 md:mt-24">
          <button
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#about');
              if (element) {
                // Get navbar height (64px on mobile, 80px on desktop)
                const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px padding
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="flex flex-col items-center cursor-pointer hover:opacity-70 transition-opacity group"
            aria-label="Scroll to About"
          >
            <span className="text-sm text-gray-500 mb-20 group-hover:text-purple-600 transition-colors">Scroll to explore</span>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

