const About = () => {
  return (
    <section
      id="about"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex items-center justify-center min-h-screen">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            This is a temporary layout for the About section. 
            We'll implement the full content and design later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

