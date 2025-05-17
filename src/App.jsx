import "./App.css";
import Introduction from "./component/Introduction";

function App() {
  return (
    <div className="flex justify-center h-scree">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
      <Introduction />
      </div>
    </div>
  );
}

export default App;
