import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Summary from "./Component/Layout/Summary";
import Availabelmeals from "./Component/Layout/AvailableMeals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartdisplay,setcartdisplay]=useState(false)

  const presshandler=()=>{
    setcartdisplay(true);
  }
 const cartnotdisplayhandler=()=>{
  setcartdisplay(false);
 }

  return (
    <CartProvider>
   {cartdisplay && <Cart oncartremove={cartnotdisplayhandler}/>} 
   {!cartdisplay &&  <Header onpress={presshandler}/>} 
   
    <Summary/>
    <Availabelmeals/>
    </CartProvider>
  );
}

export default App;
