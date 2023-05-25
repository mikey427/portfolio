import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import FooterSocials from "./FooterSocials";
import FooterEmail from "./FooterEmail";

function App() {
  return (
<<<<<<< HEAD
    <div className="text-text bg-main w-full h-full flex flex-col min-h-screen scroll-smooth">
=======
    <div className="text-text bg-main w-screen h-screen flex flex-col scroll-smooth">
>>>>>>> 2d37110 (Still working on mobile)
      <Navbar />
      <div className="flex flex-row h-screen">
        <FooterSocials />
<<<<<<< HEAD
        <div className="ml-80 mt-44 flex-row">
          <h2 className="text-xl text-pink-500 font-mono my-4 animate-fade-in-up">
            Hi, my name is
          </h2>
          <h1 className="text-6xl font-sans font-bold animate-fade-in-up">
            Michael Baez.
          </h1>
          <h1 className="text-6xl text-darktext font-sans font-bold animate-fade-in-up">
            And I am a full-stack web developer.
          </h1>
          <p className="text-darktext text-lg mt-6 w-1/2 animate-fade-in-up">
=======
        <div className="mt-28 md:ml-80 md:mt-44 flex-row">
          <h2 className="text-sm sm:text-lg md:text-xl mx-6 text-pink-500 font-mono md:my-4 animate-fade-in-up">
            Hi, my name is
          </h2>
          <h1 className="text-2xl mx-6 md:text-6xl font-sans font-bold animate-fade-in-up">
            Michael Baez.
          </h1>
          <h1 className="text-2xl mx-6 md:text-6xl text-darktext font-sans font-bold animate-fade-in-up">
            Web developer. Problem solver.
          </h1>
          <p className="text-sm ml-6 pr-6 w-full text-darktext md:text-lg mt-6 md:w-1/2 animate-fade-in-up">
>>>>>>> 2d37110 (Still working on mobile)
            Hi there! I'm a full-stack web developer with a passion for creating
            efficient, scalable projects. With expertise in JavaScript,
            TypeScript, PHP, and frameworks like React/Redux, AngularJS and
            Laravel, I design effective and functional applications.
          </p>
          <a href="/#experience">
            <h2 className="text-xl text-pink-500 font-mono my-12 w-max p-4 border  rounded border-pink-500 hover:bg-pink-500 hover:bg-opacity-20 animate-fade-in-up">
              Check out my work!
            </h2>
          </a>
        </div>
        <FooterEmail />
      </div>

      <About />
<<<<<<< HEAD
=======

>>>>>>> 2d37110 (Still working on mobile)
      <Experience />
      {/* 
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
