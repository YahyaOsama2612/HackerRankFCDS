import ColorChanger from "./components/ColorChanger";
import Discounts from "./components/Discounts";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProjectEngine from "./components/ProjectEngine";
import WorkShops from "./components/WorkShops";
import background from "/src/assets/1723813756047.jpg"


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Discounts/>
      <ProjectEngine />
      <WorkShops />
      <img  className="mt-10 mb-10 w-full" src={background} alt="" />
      <ColorChanger/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
