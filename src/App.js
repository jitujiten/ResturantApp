import React from "react";
import Header from "./Component/Layout/Header";
import Summary from "./Component/Layout/Summary";
import Availabelmeals from "./Component/Layout/AvailableMeals";

function App() {
  return (
    <React.Fragment>
    <Header/>
    <Summary/>
    <Availabelmeals/>
    </React.Fragment>
  );
}

export default App;
