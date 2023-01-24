import React from "react";
import Header from "./Component/Layout/Header";
import Summary from "./Component/Layout/Summary";
import Availabelmeals from "./Component/Layout/AvailableMeals";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <React.Fragment>
    <Cart/>
    <Header/>
    <Summary/>
    <Availabelmeals/>
    </React.Fragment>
  );
}

export default App;
