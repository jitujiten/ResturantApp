import React from "react";
import "./AvailableMeals.css";
import ItemForm from "./ItemForm";

const Availabelmeals = () => {
  const dummy_meals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.5,
    },
    {
      id: "m2",
      name: "Chowmin",
      description: "Finest chicken and prawns",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Manchurian",
      description: "cabbage and veggies with fish",
      price: 18.5,
    },
    {
      id: "m4",
      name: "Roll",
      description: "Finest chixken and mushroom",
      price: 23.8,
    },
  ];

  return (
    <React.Fragment>
      <ul className="ul">
        {dummy_meals.map((meals) => {
          return (
            <React.Fragment key={meals.id}>
              <div 
              className="form">
                <li className="li">
                  <p className="name">{meals.name}</p>
                  <p className="des">{meals.description}</p>
                  <p className="price">${meals.price}</p>
                </li>

                <ItemForm />
              </div>
              <br></br>
              <hr></hr>
            </React.Fragment>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Availabelmeals;
