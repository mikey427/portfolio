import React from "react";

function About() {
  return (
    <div id="about" className="text-text bg-main ml-96 my-36">
      <h1 className="flex my-auto text-text text-3xl font-bold font-sans">
        <span className="text-2xl text-pink-500 font-mono mt-1 mr-3">01.</span>
        About Me
        <hr className="h-px my-auto mx-4 w-80 opacity-20 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </h1>
      <div className="flex w-4/5">
        <div className="w-1/2">
          <div className="text-darktext  text-md">
            <p className="m-3">
              Hi, I'm Michael, a Software Engineer with a passion for technology
              and problem-solving. I've always had an insatiable curiosity for
              technology and have been keeping up with the latest advancements
              since I was young. In fact, I even built my first computer when I
              was just 13 years old! I'm also a car enthusiast and an avid gamer
              who enjoys playing games like Valorant, League, Overwatch, and
              TFT.
            </p>
            <p className="m-3">
              In search of a more fitting academic path, I enrolled in FullStack
              Academy and honed my skills in cutting-edge technologies like
              Javascript, React, Node, Express, and Sequelize. My experience at
              Lightspeed Voice further developed my expertise, as I built and
              maintained a custom VoIP phone system, gaining valuable insights
              into project management, time management, and teamwork. This
              sparked my passion for creating efficient and user-friendly
              software solutions, and I continue to strive towards delivering
              top-notch solutions that enhance user experience.
            </p>
            {/*<p className="m-3">
              Hello, I am Michael! As a Software Engineer, I am equipped with
              exceptional problem-solving abilities and a deep-seated eagerness
              to expand my knowledge. Ever since I was young, I have had an
              insatiable curiosity for technology, constantly keeping up with
              the latest advancements and even building my first computer when I
              was just 13 years old. I'm a car enthusiast and an avid gamer who
              plays games like Valorant, League, Overwatch, and TFT! While
              pursuing a degree in Computer Science, I realized that the
              traditional academic path was not the ideal fit for me. That's
              when I took a bold step and enrolled in FullStack Academy, pushing
              myself to new academic heights.
            </p>
            <p className="m-3">
              During my time at FullStack Academy, I mastered cutting-edge
              technologies such as Javascript, React, Node, Express, and
              Sequelize. These proficiencies have been invaluable in my work as
              a Software Developer. In addition, my experience at Lightspeed
              Voice played a pivotal role in my journey as a Software Engineer.
              While working there, I developed and maintained a custom-built
              VoIP phone system, which required me to work with a range of
              technologies such as Angular, Typescript, PHP, and Laravel.
              Collaborating with my colleagues to implement improvements gave me
              valuable insights into project management, time management, and
              teamwork, and sparked my passion for creating efficient and
              user-friendly software solutions. As a result, I strive to
              continue developing my skills and knowledge to create software
              solutions that solve real-world problems and enhance the user
              experience.
            </p>
            <p className="m-3">
              I take immense pride in my ability to think outside the box and
              devise creative solutions to complex problems. My passion for
              innovation and technology drives me to stay ahead of the curve,
              and I am constantly seeking new challenges and opportunities to
              push the boundaries of what is possible in the world of software
              development.
            </p>
            <p className="m-3">
              Overall, I am excited to continue my journey in the software
              engineering field and am committed to delivering top-notch
              solutions to clients while leveraging my extensive knowledge and
              expertise.
            </p> */}
          </div>
          <div className="flex flex-col text-darktext text-lg m-3 font-mono">
            Here are the technologies I'm most well-versed in:
            <div className="flex my-3">
              <ul className="list-disc marker:text-pink-500 mx-10">
                <li className="">Javascript (ES6+)</li>
                <li>React</li>
                <li>Node/Express</li>
              </ul>
              <ul className="list-disc marker:text-pink-500 mx-5">
                <li>Typescript</li>
                <li>Angular</li>
                <li>PHP/Laravel</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative mt-[12px] ml-12 w-96 h-96 group  ">
          <div className="bg-pink-500 bg-opacity-30 transition-all duration-500 hover:opacity-0 ease-out absolute w-80 h-80 z-20"></div>
          <img className="relative w-80 h-80 z-10" alt="" src="/me.jpg"></img>
          <div className=" transition ease-in-out duration-500 group-hover:transition-all group-hover:ease-in-out group-hover:duration-500 group-hover:-translate-y-[5px] group-hover:-translate-x-[5px] w-80 h-80 absolute border-[3px] rounded border-pink-500 top-5 left-5"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
