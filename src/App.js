import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
