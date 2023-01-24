import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const Cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", 
      name: "sushi", 
      amount: 2, 
      price: 12.9 }].map((item) =>(
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {Cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
