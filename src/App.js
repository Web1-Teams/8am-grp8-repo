import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "././components/Pages/Home";
import Event from "./components/Pages/Event";
import Products from "./components/Pages/Products";
import Food from "./components/Pages/Food";
 import Cakes from "./components/Pages/Cakes";
import About from "./components/Pages/About";
import Footer from "./components/Footer/Footer";

import NavHero from "./components/Navbar/NavHero";
import 'bootstrap/dist/css/bootstrap.min.css';
import Birthday from "./components/Pages/Birthday";
import Engagement from "./components/Pages/Engagement";
import Graduation from "./components/Pages/Graduation";
const App = () => {

  return (
   <>
   
 <BrowserRouter> 
 <NavHero/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/event" element={<Event/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/food-drink" element={<Food />} />
    <Route path="/cakes" element={<Cakes/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/event" element={<Event />}>
            <Route path="engagement" element={<Engagement />} />
            <Route path="graduation" element={<Graduation />} />
            <Route path="birthday" element={<Birthday />} />
          </Route>

   </Routes>
   <Footer/> 
   </BrowserRouter> 

   </>
     );
}

export default App 