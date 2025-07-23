import React, { useState, useContext } from "react";
import reklam1 from "../assets/reklam1.jpg";
import carouselKadin from "../assets/carouselKadin.jpg";
import carouselErkek from "../assets/carouselErkek.jpg";
import carousel1 from "../assets/carousel2Image1.jpg";
import carousel2 from "../assets/carousel2Image2.jpg";
import carousel3 from "../assets/carousel2Image3jpg.jpg";
import homeBanner from "../assets/home-banner1.jpg";
import homeBanner2 from "../assets/home-banner2.jpg";
import urun1 from "../assets/urun1.jpg";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import memeber1 from "../assets/member1.jpg";
import memeber2 from "../assets/member2.jpg";
import memeber3 from "../assets/member3.jpg";
import memeber4 from "../assets/member4.jpg";
import product21 from "../assets/product2-1.jpg";
import product22 from "../assets/product2-2.jpg";
import product23 from "../assets/product2-3.jpg";
import product31 from "../assets/product31.jpg";
import product33 from "../assets/product33.jpg";
import product41 from "../assets/product41.jpg";
import son1 from "../assets/son1.jpg";
import son2 from "../assets/son2.jpg";
import son3 from "../assets/son3.jpg";
import son4 from "../assets/son4.jpg";
import son5 from "../assets/son5.jpg";
import son6 from "../assets/son6.jpg";
import son7 from "../assets/son7.jpg";
import son8 from "../assets/son8.jpg";
import ads from "../assets/ads-07.jpg";
import blog from "../assets/blog-img2-1.jpg";
import blog2 from "../assets/blog-img3-1.jpg";
import { CartContext } from "./CartContext";

function Home() {
  const { addToCart } = useContext(CartContext);
  const urunler1 = [
    {
      id: 1,
      name: "MAX Melange Slip-On Shorts for Women's",
      img: urun1,
      price: 14.0,
      discount: 15.0,
    },
  ];

  const urunler2 = [
    {
      id: 1,
      name: " Trendy Trotters Men's Sports ",
      img: product1,
      price: 55.0,
    },
    {
      id: 2,
      name: " Honey by Pantaloons Women's Shorts ",
      img: product2,
      price: 85.0,
    },
    {
      id: 3,
      name: " Greenwich Jegging For Girls ",
      img: product3,
      price: 40.0,
    },
    {
      id: 4,
      name: " SYDA Men's Boxer Shorts ",
      img: product4,
      price: 60.0,
    },
  ];
  const urunler3 = [
    {
      id: 1,
      name: " Today Fashion Casual Women's Top ",
      img: product4,
      price: 90.0,
    },
    {
      id: 2,
      name: "  Harpa Casual Men's Short  ",
      img: urun1,
      price: 14.0,
    },
    {
      id: 3,
      name: " Trendy Trotters Men's Sports ",
      img: product1,
      price: 55.0,
    },
    {
      id: 4,
      name: " Greenwich Jegging For Girls ",
      img: product3,
      price: 40.0,
    },
  ];
  const urunler4 = [
    {
      id: 1,
      name: " Today Fashion Casual Women's Top ",
      img: product4,
      price: 90.0,
    },
    {
      id: 2,
      name: "  Harpa Casual Men's Short  ",
      img: urun1,
      price: 14.0,
    },
    {
      id: 3,
      name: " Trendy Trotters Men's Sports ",
      img: product1,
      price: 55.0,
    },
    {
      id: 4,
      name: " Honey by Pantaloons Women's Shorts ",
      img: product2,
      price: 85.0,
    },
  ];
  const urunler5 = [
    {
      id: 1,
      name: " Trendy Trotters Men's Sports ",
      img: product1,
      price: 55.0,
    },
    {
      id: 2,
      name: " Honey by Pantaloons Women's Shorts ",
      img: product2,
      price: 85.0,
    },
    {
      id: 3,
      name: " Greenwich Jegging For Girls ",
      img: product3,
      price: 40.0,
    },
    {
      id: 4,
      name: " SYDA Men's Boxer Shorts ",
      img: product4,
      price: 60.0,
    },
  ];
  let urunler6 = [
    {
      id: 1,
      name: " Raabta Womens Floral Printed Black With Print",
      img: product21,
      price: 15.0,
    },
    {
      id: 2,
      name: " Devil Women's Slim Fit Jeans ",
      img: product22,
      price: 18.0,
    },
    {
      id: 3,
      name: " American-Elm Slim Fit Men's Grey Trousers ",
      img: product23,
      price: 19.0,
    },
  ];
  let urunler7 = [
    {
      id: 1,
      name: " American-Elm Slim Fit Men's Grey Trousers",
      img: product31,
      price: 47.0,
    },
    {
      id: 2,
      name: " Honey by Pantaloons Women's Shorts ",
      img: product2,
      price: 85.0,
    },
    {
      id: 3,
      name: "  Suppar Sleave Women's Crepe Silk Skirts  ",
      img: product33,
      price: 16.0,
    },
  ];
  let urunler8 = [
    {
      id: 1,
      name: " Greenwich Jegging For Girls",
      img: product3,
      price: 15.0,
    },
    {
      id: 2,
      name: " MAX Melange Slip-On Shorts for Women's ",
      img: product22,
      price: 18.0,
    },
    {
      id: 3,
      name: " American-Elm Slim Fit Men's Grey Trousers ",
      img: product23,
      price: 19.0,
    },
  ];
  const urunler9 = [
    {
      id: 1,
      name: " Today Fashion Casual Women's Top",
      img: son1,
      price: 90.0,
    },
    {
      id: 2,
      name: " Harpa Casual Men's Short",
      img: son2,
      price: 13.0,
    },
    {
      id: 3,
      name: " Trendy Trotters Men's Sports",
      img: son3,
      price: 15.0,
    },
    {
      id: 4,
      name: " Honey by Pantaloons Women's Shorts",
      img: son4,
      price: 15.0,
    },
  ];
  const urunler10 = [
    {
      id: 1,
      name: "  Dongli printed half sleeve boys ",
      img: son5,
      price: 11.0,
    },
    {
      id: 2,
      name: "  Colt Boys V-Neck Hulk Print Tshirt ",
      img: son6,
      price: 11.0,
    },
    {
      id: 3,
      name: "   United Colors Of Benetton Skinny Girls Jeans  ",
      img: son7,
      price: 19.0,
    },
    {
      id: 4,
      name: " Raabta Womens Floral Printed Black With Print",
      img: son8,
      price: 15.0,
    },
  ];

  const [activeProducts, setActiveProducts] = useState(urunler2);
  const [clicked, setClicked] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <img src={reklam1} alt="" />
          </div>
          <div className="col-md-7 offset-sm-2 offset-lg-0 ">
            <div
              className="carousel slide carousel-fade"
              id="fadeCarousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carouselKadin} className="d-block w-100" alt="" />
                  <div className="carousel-caption d-none d-md-block text-start">
                    <span
                      className="p-2 text-white"
                      style={{ borderBottom: "1px solid white" }}
                    >
                      super sale
                    </span>
                    <h2>fashion life</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#1fc0a0" }}
                    >
                      buy now
                    </button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={carouselErkek} className="d-block w-100" alt="" />
                  <div className="carousel-caption d-none d-md-block text-start">
                    <span
                      className="p-2 text-white"
                      style={{ borderBottom: "1px solid white" }}
                    >
                      mens style
                    </span>
                    <h2>season sale</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <button
                      className="btn text-white"
                      style={{ backgroundColor: "#1fc0a0" }}
                    >
                      buy now
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#fadeCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#fadeCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div
              className="carousel slide"
              id="carouselNumber"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselNumber"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselNumber"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselNumber"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={carousel1}
                    className="d-block w-100 img-fluid"
                    alt=""
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Huge sale</h4>
                    <p>Save up to 70% OFF Fashion collection</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel2}
                    className="d-block w-100 img-fluid"
                    alt=""
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Huge sale</h4>
                    <p>Save up to 70% OFF Fashion collection</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel3}
                    className="d-block w-100 img-fluid"
                    alt=""
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h4>Huge sale</h4>
                    <p>Save up to 70% OFF Fashion collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <img src={homeBanner} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <img src={homeBanner2} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            {urunler1.map((urun) => (
              <div className="card mb-3" key={urun.id}>
                <img src={urun.img} className="card-img-top" alt={urun.name} />
                <div className="card-body text-center">
                  <h5 className="card-title ">{urun.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Price: ${urun.price.toFixed(2)}{" "}
                      <span className="text-decoration-line-through">
                        ${urun.discount.toFixed(2)}
                      </span>
                    </small>
                  </p>
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#1fc0a0" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-9 ">
            <h3 className="d-inline ">NEW PRODUCTS</h3>
            <div className="my-3 d-inline">
              <button
                className="btn rounded-0 text-white ms-4"
                onClick={() => {
                  setActiveProducts(urunler2);
                  setClicked(true);
                  setClicked2(false);
                  setClicked3(false);
                  setClicked4(false);
                }}
                style={{ backgroundColor: clicked ? "#1fc0a0" : "gray" }}
              >
                baby & kids
              </button>
              <button
                className="btn rounded-0 text-white mx-2"
                onClick={() => {
                  setActiveProducts(urunler3);
                  setClicked2(true);
                  setClicked(false);
                  setClicked3(false);
                  setClicked4(false);
                }}
                style={{ backgroundColor: clicked2 ? "#1fc0a0" : "gray" }}
              >
                dresses
              </button>
              <button
                className="btn rounded-0 text-white mx-2"
                onClick={() => {
                  setActiveProducts(urunler4);
                  setClicked3(true);
                  setClicked(false);
                  setClicked2(false);
                  setClicked4(false);
                }}
                style={{ backgroundColor: clicked3 ? "#1fc0a0" : "gray" }}
              >
                kurtas
              </button>
              <button
                className="btn rounded-0 text-white mx-2"
                onClick={() => {
                  setActiveProducts(urunler5);
                  setClicked4(true);
                  setClicked(false);
                  setClicked2(false);
                  setClicked3(false);
                }}
                style={{ backgroundColor: clicked4 ? "#1fc0a0" : "gray" }}
              >
                partywear
              </button>
            </div>

            <div className="row mt-5">
              {activeProducts.map((urun) => (
                <div
                  key={urun.id}
                  className="col-md-3 mb-4 d-flex justify-content-center"
                >
                  <div
                    className="card w-75 text-center "
                    style={{
                      borderRadius: "0px",
                      border: "none",
                      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={urun.img}
                      alt={urun.name}
                      className="card-img-top"
                      style={{
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    />
                    <div className="card-body">
                      <p className="card-title ">{urun.name}</p>
                      <b className="card-text mb-3 d-block">${urun.price}</b>
                      <button
                        className="btn text-white rounded-0"
                        style={{ backgroundColor: "#1fc0a0" }}
                        onClick={() => addToCart(urun)}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row  ">
          <div className="col-md-3">
            <div
              id="slides-with-indicators3"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  className="active"
                  type="button"
                  data-bs-target="#slides-with-indicators3"
                  data-bs-slide-to="0"
                ></button>
                <button
                  className="active"
                  type="button"
                  data-bs-target="#slides-with-indicators3"
                  data-bs-slide-to="1"
                ></button>
                <button
                  className="active"
                  type="button"
                  data-bs-target="#slides-with-indicators3"
                  data-bs-slide-to="2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="10000">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0px",
                      borderBottom: "3px solid #1fc0a0",
                    }}
                  >
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-6 text-center">
                        <img
                          className="img-fluid rounded-pill "
                          src={memeber1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, Lid est laborum dolo rumes fugats untras.
                            dolore magna aliquam erat volutpat. Aenean est
                            auctorwisiet urna. Aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="10000">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0px",
                      borderBottom: "3px solid #1fc0a0",
                    }}
                  >
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-6 text-center">
                        <img
                          className="img-fluid rounded-pill "
                          src={memeber2}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, Lid est laborum dolo rumes fugats untras.
                            dolore magna aliquam erat volutpat. Aenean est
                            auctorwisiet urna. Aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="10000">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0px",
                      borderBottom: "3px solid #1fc0a0",
                    }}
                  >
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-6 text-center">
                        <img
                          className="img-fluid rounded-pill "
                          src={memeber3}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, Lid est laborum dolo rumes fugats untras.
                            dolore magna aliquam erat volutpat. Aenean est
                            auctorwisiet urna. Aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="10000">
                  <div
                    className="card"
                    style={{
                      borderRadius: "0px",
                      borderBottom: "3px solid #1fc0a0",
                    }}
                  >
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-6 text-center">
                        <img
                          className="img-fluid rounded-pill "
                          src={memeber4}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, Lid est laborum dolo rumes fugats untras.
                            dolore magna aliquam erat volutpat. Aenean est
                            auctorwisiet urna. Aliquam erat volutpat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div
              className="d-flex  mb-3"
              style={{ borderBottom: "3px solid #dbdadaff" }}
            >
              <h3 className="pb-3">best sellers</h3>
              <div className="d-flex ms-auto">
                <button
                  type="button"
                  className=" btn  rounded-0"
                  data-bs-target="#multiItemCarousel"
                  data-bs-slide="prev"
                >
                  <i className="fa-solid fa-arrow-left"></i>{" "}
                </button>
                <button
                  type="button"
                  className=" btn  rounded-0"
                  data-bs-target="#multiItemCarousel"
                  data-bs-slide="next"
                >
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </button>{" "}
              </div>
            </div>

            <div className="row mt-5">
              <div className="carousel slide" id="multiItemCarousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      {urunler6.map((urun) => (
                        <div
                          key={urun.id}
                          className="col-md-4 mb-4 d-flex justify-content-center"
                        >
                          <div
                            className="card w-75 text-center "
                            style={{
                              borderRadius: "0px",
                              border: "none",
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={urun.img}
                              alt={urun.name}
                              className="card-img-top"
                              style={{
                                borderTopLeftRadius: "0px",
                                borderTopRightRadius: "0px",
                              }}
                            />
                            <div className="card-body">
                              <p className="card-title ">{urun.name}</p>

                              <b className="card-text mb-3 d-block">
                                ${urun.price}
                              </b>
                              <button
                                className="btn text-white rounded-0"
                                style={{ backgroundColor: "#1fc0a0" }}
                                onClick={() => addToCart(urun)}
                                id="livetoastbtn"
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="toast-container position-fixed bottom-0 end-0 p-3">
                        <div className="toast" id="livetoast" role="alert">
                          <div className="toast-header">
                            <h5>add a product</h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="toast"
                            ></button>
                          </div>
                          <div className="toast-body">
                            <p>Product added successfully</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      {urunler7.map((urun) => (
                        <div
                          key={urun.id}
                          className="col-md-4 mb-4 d-flex justify-content-center"
                        >
                          <div
                            className="card w-75 text-center "
                            style={{
                              borderRadius: "0px",
                              border: "none",
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={urun.img}
                              alt={urun.name}
                              className="card-img-top"
                              style={{
                                borderTopLeftRadius: "0px",
                                borderTopRightRadius: "0px",
                              }}
                            />
                            <div className="card-body">
                              <p className="card-title ">{urun.name}</p>

                              <b className="card-text mb-3 d-block">
                                ${urun.price}
                              </b>
                              <button
                                className="btn text-white rounded-0"
                                style={{ backgroundColor: "#1fc0a0" }}
                                onClick={() => addToCart(urun)}
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      {urunler8.map((urun) => (
                        <div
                          key={urun.id}
                          className="col-md-4 mb-4 d-flex justify-content-center"
                        >
                          <div
                            className="card w-75 text-center "
                            style={{
                              borderRadius: "0px",
                              border: "none",
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={urun.img}
                              alt={urun.name}
                              className="card-img-top"
                              style={{
                                borderTopLeftRadius: "0px",
                                borderTopRightRadius: "0px",
                              }}
                            />
                            <div className="card-body">
                              <p className="card-title ">{urun.name}</p>

                              <b className="card-text mb-3 d-block">
                                ${urun.price}
                              </b>
                              <button
                                className="btn text-white rounded-0"
                                style={{ backgroundColor: "#1fc0a0" }}
                                onClick={() => addToCart(urun)}
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row  ">
          <div className="col-md-3">
            <img src={ads} alt="" />
          </div>
          <div className="col-md-9">
            <div
              className="d-flex  mb-3"
              style={{ borderBottom: "3px solid #dbdadaff" }}
            >
              <h3 className="pb-3">Featured Product</h3>
              <div className="d-flex ms-auto">
                <button
                  type="button"
                  className=" btn  rounded-0"
                  data-bs-target="#multiItemCarousel2"
                  data-bs-slide="prev"
                >
                  <i className="fa-solid fa-arrow-left"></i>{" "}
                </button>
                <button
                  type="button"
                  className=" btn  rounded-0"
                  data-bs-target="#multiItemCarousel2"
                  data-bs-slide="next"
                >
                  <i className="fa-solid fa-arrow-right"></i>{" "}
                </button>{" "}
              </div>
            </div>

            <div className="row mt-5">
              <div className="carousel slide" id="multiItemCarousel2">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      {urunler9.map((urun) => (
                        <div
                          key={urun.id}
                          className="col-md-3 mb-4 d-flex justify-content-center"
                        >
                          <div
                            className="card w-75 text-center "
                            style={{
                              borderRadius: "0px",
                              border: "none",
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={urun.img}
                              alt={urun.name}
                              className="card-img-top"
                              style={{
                                borderTopLeftRadius: "0px",
                                borderTopRightRadius: "0px",
                              }}
                            />
                            <div className="card-body">
                              <p className="card-title ">{urun.name}</p>

                              <b className="card-text mb-3 d-block">
                                ${urun.price}
                              </b>
                              <button
                                className="btn text-white rounded-0"
                                style={{ backgroundColor: "#1fc0a0" }}
                                onClick={() => addToCart(urun)}
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="row">
                      {urunler10.map((urun) => (
                        <div
                          key={urun.id}
                          className="col-md-3 mb-4 d-flex justify-content-center"
                        >
                          <div
                            className="card w-75 text-center "
                            style={{
                              borderRadius: "0px",
                              border: "none",
                              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            }}
                          >
                            <img
                              src={urun.img}
                              alt={urun.name}
                              className="card-img-top"
                              style={{
                                borderTopLeftRadius: "0px",
                                borderTopRightRadius: "0px",
                              }}
                            />
                            <div className="card-body">
                              <p className="card-title ">{urun.name}</p>

                              <b className="card-text mb-3 d-block">
                                ${urun.price}
                              </b>
                              <button
                                className="btn text-white rounded-0"
                                style={{ backgroundColor: "#1fc0a0" }}
                                onClick={() => addToCart(urun)}
                              >
                                add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3
              className="p-3 "
              style={{ borderBottom: "3px solid #dbdadaff" }}
            >
              latest blog
            </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <img src={blog} className="img-fluid mb-3" alt="" />
            <h5 className="">Pellentesque habitant morbi</h5>
            <div className="row justify-content-between">
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-user"></i>
                <span className="ms-2">posted by MagikThemes</span>
              </div>
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-comment"></i>
                <span className="ms-2">5 Comments</span>
              </div>
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-clock"></i>
                <span className="ms-2">January 04, 2016</span>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum et mi vulputate gen vehicula
              </p>
            </div>
            <button
              className="btn rounded-0 "
              style={{ border: "1px solid grey", fontWeight: "bold" }}
            >
              read more
            </button>
          </div>
          <div className="col-md-6">
            <img src={blog2} className="img-fluid mb-3" alt="" />
            <h5 className="">Standard blog post with photo</h5>
            <div className="row justify-content-between">
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-user"></i>
                <span className="ms-2">posted by MagikThemes</span>
              </div>
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-comment"></i>
                <span className="ms-2">5 Comments</span>
              </div>
              <div className="col-md-4 " style={{ color: "grey" }}>
                <i className="fa-solid fa-clock"></i>
                <span className="ms-2">January 04, 2016</span>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum et mi vulputate gen vehicula
              </p>
            </div>
            <button
              className="btn rounded-0 "
              style={{ border: "1px solid grey", fontWeight: "bold" }}
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
