const Portfolio = () => {
  const education = [
    {
      school: "New York University",
      degree: "Master of Science in Computer Science",
      location: "New York, U.S.",
      date: "June 2026",
      coursework: "Advanced Database System, Big Data and Machine Learning System, Big Data Analysis and Development"
    },
    {
      school: "National Taiwan University",
      degree: "Bachelor of Science in Computer Science and Information Engineering",
      location: "Taipei, Taiwan",
      date: "June 2023"
    }
  ];

  const skills = [
    { category: "Programming Languages", items: "Python, JavaScript, TypeScript, C" },
    { category: "Full-Stack Development", items: "React.js, Vue.js, Redux, Tailwind CSS, Node.js, FastAPI, Flask, REST" },
    { category: "Databases", items: "PostgreSQL, MySQL, SQLite" },
    { category: "Machine Learning & AI", items: "PyTorch, CUDA, OpenCV, OpenAI API, RAG" },
    { category: "Data Engineering", items: "Apache Spark, Pytrend, ETL" },
    { category: "Cloud & DevOps", items: "GCP, AWS ECS, Serverless Framework, Gitflow, CI/CD, Docker, Kubernetes, Linux" }
  ];

  const experience = [
    {
      title: "Software Engineer Intern | Heptabase",
      company: "YC W22",
      location: "Remote",
      date: "2025",
      achievements: [
        "Shipped an AI-powered PDF chat feature by integrating with OpenAI, delivered a production level feature within one week that enabled contextual QA for PDF documents.",
        "Delivered a scalable, end-to-end PDF parsing system POC, including the connection of backend and OCR services, database schema design, and integration of parsed result and existing functionalities.",
        "Optimized PDF processing performance by deploying on serverless architecture, leading to a 10x improvement in latency and 65% cost reduction through parallel processing.",
        "Established a full CI/CD pipeline for the self-deployed OCR service connected to AWS Elastic Container Service."
      ]
    },
    {
      title: "Software Engineer Intern | Appier",
      company: "Enterprise AI solution platform",
      location: "Taipei, Taiwan",
      date: "2023 - 2024",
      achievements: [
        "Leveraged generative AI for query expansion and embedding calculation to enhance a search engine POC, improving F1 score by 37% in processing unstructured queries.",
        "Built client-facing SaaS interfaces with React.js, enabling seamless integration of AI-powered features and enhancing user experience.",
        "Designed and implemented an efficient polling request and exception handling mechanism to manage uncertain API responses, substantially reducing request failures and improving data accuracy.",
        "Created interactive UI components using Tailwind CSS for file uploading, image cropping, and canvas operations.",
        "Developed Vue.js-based visualization tools to simplify complex API logics, improving data accessibility and insights."
      ]
    },
    {
      title: "Software Quality Assurance Intern | Shopline",
      company: "E-commerce platform",
      location: "Taipei, Taiwan",
      date: "2022 - 2023",
      achievements: [
        "Conducted end-to-end testing for e-commerce features used by 200,000+ merchants, covering interfaces, payments, and notifications.",
        "Automated daily regression testing with Cucumber and Selenium, detecting critical bugs early and reducing manual QA efforts.",
        "Designed and executed comprehensive test plans for manual validation of new features, ensuring release quality."
      ]
    }
  ];

  const projects = [
    {
      title: "Steam Games Trending Analysis",
      subtitle: "",
      date: "2024",
      description: [
        "Collected and analyzed trending data of top Steam games using Pytrend and Google Trends API to identify player interest patterns across 20,000+ records.",
        "Executed ETL processes on a 15GB dataset using Spark, uncovering factors influencing game popularity through integrated team findings."
      ]
    },
    {
      title: "Face Anti-Spoofing w/ E-Sun Bank",
      subtitle: "Undergraduate Research | Taipei, Taiwan",
      date: "2022 - 2023",
      description: [
        "Researched state-of-the-art techniques in face anti-spoofing fields, focusing on improving generalization across unseen attacks.",
        "Assisted in experiments of Domain-Generalized Face Anti-Spoofing with Unknown Attacks, ICIP 2023.",
        "Developed and tested face anti-spoofing models by integrating meta-learning and frequency decomposition techniques, achieving a 96% AUC score on the OCIM benchmark."
      ]
    },
    {
      title: "Open Vocabulary Segmentation w/ Google",
      subtitle: "Undergraduate Research | Taipei, Taiwan",
      date: "2022 - 2023",
      description: [
        "Developed a two-stage open vocabulary segmentation framework achieving an Average Precision score of 12.33 on the COCO dataset.",
        "Analyzed state-of-the-art techniques in open vocabulary segmentation fields.",
        "Utilized limited training data to fine-tune large foundation models like BLIP."
      ]
    },
    {
      title: "Legal-Tech Hackathon",
      subtitle: "",
      date: "2022",
      description: [
        "Led a winning team (1st place) in the Legal-Tech Hackathon, developing a Chrome extension for Lawsnote to provide similar case judgments, enhancing decision-making."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 px-6 rounded-lg mx-4 mt-5 mb-10 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-3">Ethan Ding</h1>
          <p className="text-xl mb-6">Software Engineer | Full-Stack Developer | AI Enthusiast</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:yd3163@nyu.edu" className="hover:underline">yd3163@nyu.edu</a>
            <span>|</span>
            <a href="tel:+15513258501" className="hover:underline">+1 551-325-8501</a>
            <span>|</span>
            <span>New York, NY</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Education */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-600 border-b-4 border-purple-600 pb-3 mb-6">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start flex-wrap mb-2">
                <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                <span className="text-gray-600 font-medium">{edu.date}</span>
              </div>
              <p className="text-gray-700 italic mb-2">{edu.degree} | {edu.location}</p>
              {edu.coursework && (
                <p className="text-gray-700"><strong>Coursework:</strong> {edu.coursework}</p>
              )}
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-600 border-b-4 border-purple-600 pb-3 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-600">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">{skill.category}</h3>
                <p className="text-gray-700 text-sm">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-600 border-b-4 border-purple-600 pb-3 mb-6">Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-start flex-wrap mb-2">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <span className="text-gray-600 font-medium">{exp.date}</span>
              </div>
              <p className="text-gray-700 italic mb-3">{exp.company} | {exp.location}</p>
              <ul className="list-disc list-outside ml-5 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects & Research */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-600 border-b-4 border-purple-600 pb-3 mb-6">Projects & Research</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-start flex-wrap mb-2">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <span className="text-gray-600 font-medium">{project.date}</span>
              </div>
              {project.subtitle && (
                <p className="text-gray-700 italic mb-3">{project.subtitle}</p>
              )}
              <ul className="list-disc list-outside ml-5 space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-700">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-8">
          <p>&copy; 2025 Ethan Ding. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;