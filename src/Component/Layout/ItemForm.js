import React from "react";
import "./ItemForm.css";
import Input from "../UI/Card/Input";
const ItemForm=()=>{
  
    return(
        <form className="itemform">
        <Input label="Amount" input={{
            id:"Amount",
            type:"number",
            min:"1",
            max:"5",
            defaultValue:"1",
            step:"1"
        }}/>
        <button className="button">+Add</button>
        </form>
    );
}

export default ItemForm;