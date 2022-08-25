import { useEffect } from "react";
import "./App.css";
import { PetDisplay } from "./PetDisplay";
import { User } from "./User";
import { useStore } from "./zustand/store";

function App() {
  const queryUser = useStore((state) => state.queryUser);
  const init = () => {
    queryUser();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="/?name=Steph&favouritePet=dog">
          Visit site with query parameter
        </a>
        <User name="" />
        <PetDisplay />
      </header>
    </div>
  );
}

export default App;
