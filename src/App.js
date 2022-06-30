import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
