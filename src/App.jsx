import "./App.css";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div className="flex justify-center h-screen bg-gray-500 ">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%] ">
        <h1 className="w-full p-6 bg-white font-extrabold border-3 rounded-2xl">
          React App Starter
        </h1>
        <section className="w-full p-5 bg-white flex border-3 rounded-2xl">
          <ul className="list-inside list-disc flex-1">
            <span className="font-semibold">Tech Stack:</span>
            <li>Vite</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
          </ul>
        </section>
      <Gallery />
      </div>
    </div>
  );
}

export default App;
