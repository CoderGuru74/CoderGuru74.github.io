import React from "react";

const stack = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
];

const TechStack = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110 group"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12"
              title={tech.name}
            />
            <span className="mt-2 text-sm text-gray-700 group-hover:text-black">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
