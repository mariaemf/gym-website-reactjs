import Aos from "aos";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Footer from "./components/UI/Footer";
import Hero from "./components/UI/Hero";
import Princing from "./components/UI/Princing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Princing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
