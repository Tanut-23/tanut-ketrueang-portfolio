import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Introduction from "./component/Introduction";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import TechnicalSkill from "./component/TechnicalSkill";

function App() {
  return (
    <div className="flex justify-center h-screen">
      <div className="relative flex flex-col gap-12 mx-auto w-full max-w-screen-md flex-1 pt-20">
        <Navbar />
        <Introduction />
        <About />
        <Project />
        <TechnicalSkill />
        <Contact />
      </div>
    </div>
  );
}

export default App;
