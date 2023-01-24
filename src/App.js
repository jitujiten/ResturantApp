import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Summary from "./Component/Layout/Summary";
import Availabelmeals from "./Component/Layout/AvailableMeals";
import Cart from "./Component/Cart/Cart";


function App() {

  const [cartdisplay,setcartdisplay]=useState(false)

  const presshandler=()=>{
    setcartdisplay(true);
  }
 const cartnotdisplayhandler=()=>{
  setcartdisplay(false);
 }

  return (
    <React.Fragment>
   {cartdisplay && <Cart oncartremove={cartnotdisplayhandler}/>} 
   {!cartdisplay &&  <Header onpress={presshandler}/>} 
   
    <Summary/>
    <Availabelmeals/>
    </React.Fragment>
  );
}

export default App;
