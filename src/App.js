import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./components/Pages/Home";
import Event from "./components/Pages/Event";
import Products from "./components/Pages/Products";
import Food from "./components/Pages/Food";
 import Cakes from "./components/Pages/Cakes";
import About from "./components/Pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
const App = () => {

  return (
   <>
   <BrowserRouter>
   <Toaster/>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/food-drink" element={<Food />} />
    <Route path="/cakes" element={<Cakes/>}/>
   <Route path="/about" element={<About/>}/>


   </Routes>
   <Footer/>
   </BrowserRouter>

   </>
     );
}

export default App 