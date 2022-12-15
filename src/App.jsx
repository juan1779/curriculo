import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Services from "./components/services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Head />
      <About />
      <Skills />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
