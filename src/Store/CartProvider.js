import React from "react";
import CartContext from "./CartContext";

const CartProvider=(props)=>{


    const additemhanler=(item)=>{

    }
    
    const removeitemhandler=(id)=>{
        
    }
    
    
    const CartCont={
        items:[],
        totalAmount:0,
        addItem:additemhanler,
        removeItem:removeitemhandler
      }




   return <CartContext.Provider value={CartCont}>
    {props.children}
   </CartContext.Provider>
}

export default CartProvider;