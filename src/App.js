import React from "react";
import './App.css';
import Navbar from './Component/Header/Navbar';
import Newnav from './Component/Newnav/Newnav';
import Maincomponent from "./Component/Home/Maincomponent"
import Footer from "./Component/Footer/Footer";
import Signin from "./Component/Signup_Signin/Signin";
import Signup from "./Component/Signup_Signin/Signup";
import Buynow from "./Component/buynow/Buynow";
import {Routes,Route} from "react-router-dom";
import Cart from "./Component/Cart/Cart";
function App() {
  return (
    <div>
    
    <Navbar/>
    <Newnav/>
    <Routes>
     <Route path="/" element={<Maincomponent/>}/>
     <Route path="/login" element={<Signin/>}/>
     <Route path="/register" element={<Signup/>}/>
     <Route path="/getproductsone/:id" element={< Cart/>}/>
     <Route path="/buynow" element={< Buynow/>}/>
   

    </Routes>
    
    <Footer/>
    
    </div>
   );
}
export default App;
