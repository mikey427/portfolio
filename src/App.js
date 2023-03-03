import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="text-text bg-main w-screen h-screen">
      <Navbar />
      <div className="ml-28 mt-44">
        <h2 className="text-xl text-pink-500 font-mono my-4">Hi, my name is</h2>
        <h1 className="text-6xl font-sans font-bold">Michael Baez.</h1>
        <h1 className="text-6xl text-darktext font-sans font-bold">
          And I am a full-stack web developer.
        </h1>
        <p className="text-darktext text-xl mt-6">
          I'm a software engineer that specializes in building web applications.
        </p>
        <h2 className="text-xl text-pink-500 font-mono my-12 p-4 border w-max rounded border-pink-500">
          Check out my work!
        </h2>
      </div>
    </div>
  );
}

export default App;
