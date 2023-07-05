import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects2 from "./Projects(deprecated)";
import Contact from "./Contact";
import FooterSocials from "./FooterSocials";
import FooterEmail from "./FooterEmail";
import Projects from "./Projects";

function App() {
  return (
    <div className="text-text bg-main w-screen sm:h-screen flex flex-col scroll-smooth xxl:w-1/2 xxl:mx-auto">
      <Navbar />
      <div className="flex bg-main flex-row h-screen">
        <FooterSocials />
        <div className="pt-20 pr-4 md:pr-0 md:pl-20 md:py-auto lg:pl-0 lg:ml-32 lg:mt-22 xl:ml-80 xl:pt-44 xxl:mx-0 xxl:px-0 h-screen flex-row h-max">
          <h2 className="text-sm sm:text-lg md:text-xl mx-6 text-pink-500 font-mono md:my-4 animate-fade-in-up xxl:mx-0 xxl:px-0">
            Hi, my name is
          </h2>
          <h1 className="text-2xl mx-6 md:text-6xl font-sans font-bold animate-fade-in-up xxl:mx-0 xxl:px-0">
            Michael Baez.
          </h1>
          <h1 className="text-2xl mx-6 md:text-6xl text-darktext font-sans font-bold animate-fade-in-up xxl:mx-0 xxl:px-0">
            Web developer. Problem solver.
          </h1>
          <p className="text-sm pl-6 pr-6 h-min w-full text-darktext md:text-lg mt-6 md: w-3/4 lg:w-3/4 animate-fade-in-up xxl:mx-0 xxl:px-0">
            Hi there! I'm a full-stack web developer with a passion for creating
            efficient, scalable projects. With expertise in JavaScript,
            TypeScript, PHP, and frameworks like React/Redux, AngularJS and
            Laravel, I design effective and functional applications.
          </p>
          <a href="/#experience">
            <h2 className="text-xl ml-6 text-pink-500 font-mono mt-12 w-max p-4 border  rounded border-pink-500 hover:bg-pink-500 hover:bg-opacity-20 animate-fade-in-up xxl:mx-0 xxl:px-0">
              Check out my work!
            </h2>
          </a>
        </div>
        <FooterEmail />
      </div>

      <About />

      <Experience />

      <Projects />

      <Contact />

    </div>
  );
}

export default App;
