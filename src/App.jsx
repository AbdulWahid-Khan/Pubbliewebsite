import "./App.css";
import About from "./components/about/about";
import Carddetails from "./components/cards/Carddetails";
import Faqsection from "./components/Faq/faqsection";
import Formsection from "./components/formsection/formsection";
import Herosection from "./components/hero/herosection";
import Navbar from "./components/navbar/navbar";
import Pubblieworks from "./components/pubblieworks/pubblieworks";
// import doticon from "./../../assets/images/doticon.svg";
function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Pubblieworks />
      <Carddetails />
      <Faqsection />
      <Formsection />
    </>
  );
}

export default App;
