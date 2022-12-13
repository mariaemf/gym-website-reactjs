import "./App.css";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Hero from "./components/UI/Hero";
import Princing from "./components/UI/Princing";
import Start from "./components/UI/Start";
import Testimonials from "./components/UI/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Princing />
      <Testimonials />
    </>
  );
}

export default App;
