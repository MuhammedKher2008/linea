import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { totalItem, totalPrice } = useContext(CartContext);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container pt-2">
              <div className="row">
                <div className="col-md-2 dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "grey" }}
                  >
                    languange
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        english
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        germany
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        french
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2  dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "grey" }}
                  >
                    currency
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        dolar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        pound
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-7 position-relative   p-1">
                  <div className="row">
                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        My account
                      </Link>
                    </div>

                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        chekout
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        chekout
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        wishlist
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        login
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className=" ps-2 text-dark text-decoration-none">
                        register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-3">
              <img src={logo} alt="" />
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input className="form-control" type="text" name="" id="" />
                <button className="btn" style={{ border: "1px solid #dee2e6" }}>
                  <i className="fa-solid  fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3 ms-3 ">
              <Link className="text-decoration-none">
                <div className="row">
                  <div className="col-md-4">
                    <i
                      className="fa-solid fa-bag-shopping fs-3 text-white rounded-pill p-3 "
                      style={{ backgroundColor: "#1fc0a0" }}
                    ></i>
                  </div>
                  <div className="col-md-6">
                    <div className="d-inline ">
                      <p className="text-muted ">shopping cart</p>
                      <span className="text-muted">
                        item: <span>{totalItem > 0 ? totalItem : "0"}</span>
                      </span>
                      <span>/</span>
                      <span className="text-muted">
                        {totalPrice > 0 ? totalPrice + "$" : "0 $"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark  py-2">
        <div className="row">
          <div className="col-md-12">
            <div className="container ">
              <div className="row ">
                <div className="col-md-3 ms-5 ">
                  <div
                    className=" text-white p-2 "
                    style={{ backgroundColor: "#1fc0a0" }}
                  >
                    <button
                      className="btn text-white dropdown-toggle fs-5"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-bars"></i>
                      <span className="ms-2 ">all categorys</span>
                    </button>
                    <ul className="dropdown-menu" style={{ borderRadius: "0" }}>
                      <li className="text-center dropdown-item">
                        <Link to="/" className="text-dark text-decoration-none">
                          <i className="fa-solid fa-house me-3"></i>
                          home
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <i className="fa-solid fa-user me-2"></i> dress
                        <button
                          className="btn  dropdown-toggle fs-5"
                          type="button"
                          data-bs-toggle="dropdown"
                        ></button>
                        <ul
                          className="dropdown-menu"
                          style={{ borderRadius: "0" }}
                        >
                          <li className="text-center dropdown-item">
                            high heels
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-7 d-flex text-white align-items-center">
                  <span>Free Shipping Worldwide</span>
                  <span className="mx-2">/</span>
                  <span className="mx-2">Money Back Guarantee</span>
                  <span className="mx-2">/</span>
                  <span className="mx-2">Hotline +(888) 123-4567</span>
                  <button className="btn btn-danger rounded-1">
                    offer zone
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
