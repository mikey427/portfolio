import React, { useState } from "react";

function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);
  const experience = [
    {
      name: "Lightspeed Voice",
      title: "Software Developer",
      link: "https://www.lightspeedvoice.com/",
      datesEmployed: "September 2021 - July 2022",
      descriptionBullets: [
        "Collaborated with a team of developers to plan and execute projects.",
        "Utilized AngularJS and MaterialUI for frontend development, and PHP Laravel for backend development.",
        "Designed and implemented efficient and scalable code for increased functionality and readability.",
        "Maintained effective communication with team members to ensure project success.",
      ],
    },
    {
      name: "FullStack Academy",
      title: "Full Stack Software Engineering Student",
      link: "https://www.fullstackacademy.com/",
      datesEmployed: "March 2021 - July 2021",
      descriptionBullets: [
        "Completed a 17-week full-time immersive Full Stack Engineering program at Fullstack Academy in July 2021.",
        "Gained experience working in a simulated work environment, which included code reviews, daily standups, and using Git workflow.",
        "Developed solo and team projects, which helped to improve team dynamics, Agile development, and research skills for new technologies.",
        "Acquired experience with various technologies and frameworks relevant to Full Stack Engineering, including [insert relevant technologies/frameworks you learned].",
      ],
    },
  ];

  function handleClick(event) {
    if (event.target.textContent === "FullStack Academy") {
      setSelectedJob(1);
    } else {
      setSelectedJob(0);
    }
  }

  return (
    <div id="experience" className="text-text bg-main mx-auto my-36 w-1/2">
      <h1 className="flex my-auto text-text text-3xl font-bold font-sans">
        <span className="text-2xl text-pink-500 font-mono mt-1 mr-3">02.</span>
        My Experience
        <hr className="h-px my-auto mx-4 w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </h1>
      <div className="relative flex">
        <hr className="relative w-px my-4 ml-4 h-64 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {selectedJob === 0 ? (
          <hr className="transition ease-in-out duration-500 absolute mt-4 top-0 left-0 w-[2px] my-auto ml-4 h-[40px] bg-pink-500 border-0 rounded-lg"></hr>
        ) : (
          <hr className="transition ease-in-out duration-500 translate-y-10 absolute mt-4 top-0 left-0 w-[2px] my-auto ml-4 h-[40px] bg-pink-500 border-0 rounded-lg"></hr>
        )}
        <div className="flex flex-col text-sm font-mono mr-8 mt-4">
          <button
            onClick={handleClick}
            value="Lightspeed Voice"
            className="hover:bg-pink-500 hover:bg-opacity-10 w-40 h-10"
          >
            <span className="relative text-pink-500">Lightspeed Voice</span>
          </button>

          <button
            onClick={handleClick}
            value="FullStack Academy"
            className="hover:bg-pink-500 hover:bg-opacity-10 w-40 h-10"
          >
            <span className="text-pink-500">FullStack Academy</span>
          </button>
        </div>
        <div className="mt-4">
          <h1 className="flex font-bold text-xl">
            {experience[selectedJob].title}{" "}
            <span className="text-pink-500 mx-1">@</span>
            <span className="flex flex-col group w-max">
              <a
                href={experience[selectedJob].link}
                className="group text-pink-500 transition duration-300"
              >
                {experience[selectedJob].name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-500"></span>
              </a>
            </span>
          </h1>
          <h2 className="font-mono text-sm my-2">
            {experience[selectedJob].datesEmployed}
          </h2>
          <ul className="mt-4 list-disc marker:text-pink-500 mx-5 w-3/4">
            {experience[selectedJob].descriptionBullets.map((text, id) => {
              return (
                <li key={id} className="my-1">
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
