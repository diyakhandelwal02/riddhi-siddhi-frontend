import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Service from "./components/Service.jsx";
import Product from "./components/Product.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Distribution from "./components/Distribution.jsx";
import Commitment from "./components/Commitment.jsx";
import Frame from './components/Frame.jsx'
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Product/>
      <Service/>
      <Process/>
      <Distribution/>
      <Commitment/>
      <Frame/>
      <Footer/>
    </>
  );
}

export default App;