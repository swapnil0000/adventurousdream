import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MovingText from "./pages/MovingText";
import Contact from "./pages/Contact";
function App() {
  return (
   <BrowserRouter>
   <MovingText/>
     <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
