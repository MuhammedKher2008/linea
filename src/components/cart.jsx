import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, totalPrice, updateQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="mt-5">Your cart is empty</h2>
            <button className="btn mt-5" style={{ backgroundColor: "#1fc0a0" }}>
              <Link to="/" className="text-white text-decoration-none">
                Go to courses
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="text-center">Order Summary</h2>
          <ul className="list-unstyled ms-4 mt-5">
            {cart.map((item) => (
              <li
                key={item.id}
                className="p-4 my-5"
                style={{ border: "1px solid black" }}
              >
                <div className="row align-items-center">
                  <div className="col-md-1 fw-bold">{item.id}</div>

                  <div className="col-md-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid"
                      style={{ maxWidth: "100px", borderRadius: "10px" }}
                    />
                  </div>

                  <div className="col-md-3">
                    <div className="fw-bold">{item.name}</div>
                    <div>{item.price}$</div>
                  </div>

                  <div className="col-md-2">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-3">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-outline-danger rounded-pill"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <strong className="ms-5">Total: ${totalPrice}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
