import "./App.css";
import { PetDisplay } from "./PetDisplay";
import { User } from "./User";
import { useStore } from "./zustand/store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site with query parameter
        </a>
        <User name="" />
        <PetDisplay />
      </header>
    </div>
  );
}

export default App;
