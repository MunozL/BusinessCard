import "./App.css";
import About from "./components/About";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="ctn">
      <Photo />
      <div className="ctn-mid-section">
        <Info />
        <About />
        <Buttons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
