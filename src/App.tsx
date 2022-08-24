import "./App.css";
import { User } from "./User";

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
        <User name="" favouritePet="dog" />
      </header>
    </div>
  );
}

export default App;
