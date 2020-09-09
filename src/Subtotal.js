import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  // pull the basket from StateProvider
  const [{ basket }] = useStateValue();

  // Homework day 2 - show the number of items and SUM the total price of the products
  const totalPrice = (basket) => {
    return basket.reduce((price, item) => item.price + price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* part of homework */}
              Subtotal ({basket.length} items):
              <strong>${totalPrice(basket).toFixed(2)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
