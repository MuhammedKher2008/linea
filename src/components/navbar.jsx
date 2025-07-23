import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { totalItem, totalPrice } = useContext(CartContext);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container pt-2">
              <div className="row">
                <div className="col-md-2 dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "grey" }}
                  >
                    language
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        english
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        german
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        french
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-2 dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{ color: "grey" }}
                  >
                    currency
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        dollar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        pound
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-7 position-relative p-1">
                  <div className="row">
                    <div className="col-md-2">
                      <Link className="ps-2 text-dark text-decoration-none">
                        My account
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className="ps-2 text-dark text-decoration-none">
                        checkout
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className="ps-2 text-dark text-decoration-none">
                        wishlist
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className="ps-2 text-dark text-decoration-none">
                        login
                      </Link>
                    </div>
                    <div className="col-md-2">
                      <Link className="ps-2 text-dark text-decoration-none">
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
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input className="form-control" type="text" />
                <button className="btn" style={{ border: "1px solid #dee2e6" }}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3 ms-3">
              <Link className="text-decoration-none" to="/cart">
                <div className="row">
                  <div className="col-md-4">
                    <i
                      className="fa-solid fa-bag-shopping fs-3 text-white rounded-pill p-3"
                      style={{ backgroundColor: "#1fc0a0" }}
                    ></i>
                  </div>
                  <div className="col-md-6">
                    <p className="text-muted">shopping cart</p>
                    <span className="text-muted">item: {totalItem || "0"}</span>
                    <span> / </span>
                    <span className="text-muted">
                      {totalPrice > 0 ? `${totalPrice}$` : "0 $"}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark py-2">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="text-white p-2"
                    style={{ backgroundColor: "#1fc0a0" }}
                  >
                    <button
                      className="btn text-white dropdown-toggle fs-5"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-bars"></i>
                      <span className="ms-2">all categories</span>
                    </button>
                    <ul className="dropdown-menu" style={{ borderRadius: "0" }}>
                      <li className="text-center dropdown-item">
                        <Link to="/" className="text-dark text-decoration-none">
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-house me-3"></i>
                            </div>
                            <div className="col-md-7">home</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/dress"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-child me-2"></i>
                            </div>
                            <div className="col-md-7">dress</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/Tops"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-child-dress"></i>
                            </div>
                            <div className="col-md-7">tops</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/EthnicWear"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-gears"></i>
                            </div>
                            <div className="col-md-7">ethnic wear</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/PartyWear"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-gift"></i>
                            </div>
                            <div className="col-md-7">partywear</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/BabyKids"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-futbol"></i>
                            </div>
                            <div className="col-md-7">baby & kids</div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-center dropdown-item">
                        <Link
                          to="/GameSport"
                          className="text-dark text-decoration-none"
                        >
                          <div className="row">
                            <div className="col-md-1">
                              <i className="fa-solid fa-user me-2"></i>
                            </div>
                            <div className="col-md-7">game & sport</div>
                          </div>
                        </Link>
                      </li>
                      <li
                        className={`dropdown-submenu${
                          submenuOpen ? " show" : ""
                        }`}
                        style={{ position: "relative" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSubmenuOpen(!submenuOpen);
                        }}
                        onMouseLeave={() => setSubmenuOpen(false)}
                      >
                        <div className="row">
                          <div className="col-md-1 ms-3 ">
                            <i class="fa-solid fa-rss me-1"></i>
                          </div>
                          <div className="col-md-7">
                            <a
                              className="dropdown-item dropdown-toggle"
                              href="#"
                              tabIndex="-1"
                              onClick={(e) => e.preventDefault()}
                            >
                              blog{" "}
                            </a>
                          </div>
                        </div>

                        <ul
                          className={`dropdown-menu${
                            submenuOpen ? " show" : ""
                          }`}
                          style={{
                            top: "0",
                            left: "100%",
                            marginLeft: "1rem",
                            marginRight: "1rem",
                            position: "absolute",
                          }}
                        >
                          <li>
                            <Link
                              to="/Leftsidebar"
                              className="dropdown-item"
                              href="#"
                            >
                              blog left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Rightsidebar"
                              className="dropdown-item"
                              href="#"
                            >
                              blog right sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Fullwidth"
                              className="dropdown-item"
                              href="#"
                            >
                              blog full width
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={`dropdown-submenu${
                          submenuOpen2 ? " show" : ""
                        }`}
                        style={{ position: "relative" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSubmenuOpen2(!submenuOpen2);
                        }}
                        onMouseLeave={() => setSubmenuOpen2(false)}
                      >
                        <div className="row">
                          <div className="col-md-1 ms-3 ">
                            <i class="fa-solid fa-file me-1"></i>
                          </div>
                          <div className="col-md-7">
                            <a
                              className="dropdown-item dropdown-toggle"
                              href="#"
                              tabIndex="-1"
                              onClick={(e) => e.preventDefault()}
                            >
                              pages{" "}
                            </a>
                          </div>
                        </div>

                        <ul
                          className={`dropdown-menu${
                            submenuOpen2 ? " show" : ""
                          }`}
                          style={{
                            top: "0",
                            left: "100%",
                            marginLeft: "1rem",
                            marginRight: "1rem",
                            position: "absolute",
                          }}
                        >
                          <li>
                            <Link
                              to="/Magiksearch"
                              className="dropdown-item"
                              href="#"
                            >
                              Magik Search
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Aboutus"
                              className="dropdown-item"
                              href="#"
                            >
                              About us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Typography"
                              className="dropdown-item"
                              href="#"
                            >
                              Typography
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Blog"
                              className="dropdown-item"
                              href="#"
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/FullwidthPage"
                              className="dropdown-item"
                              href="#"
                            >
                              Full width Page
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/PageLeft"
                              className="dropdown-item"
                              href="#"
                            >
                              page-left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/PageRight"
                              className="dropdown-item"
                              href="#"
                            >
                              page-Right sidebar
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/ThreeColumn"
                              className="dropdown-item"
                              href="#"
                            >
                              page-three column
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Pricing"
                              className="dropdown-item"
                              href="#"
                            >
                              pricing table
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Contact"
                              className="dropdown-item"
                              href="#"
                            >
                              contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Faq"
                              className="dropdown-item"
                              href="#"
                            >
                              Faq
                            </Link>
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
                  <button className="btn btn-danger rounded-1 ms-2">
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
