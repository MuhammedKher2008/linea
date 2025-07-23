import React from "react";
import reklam1 from "../assets/reklam1.jpg";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
function Dress() {
  const urunler = [
    { id: 1, name: "Trendy Trotters Men's Sports", img: product1, price: 100 },
    {
      id: 2,
      name: "Honey by Pantaloons Women's Shorts",
      img: product2,
      price: 200,
    },
    { id: 3, name: "Greenwich Jegging For Girls", img: product3, price: 300 },
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={reklam1} alt="" />

          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body">
                  <h5 className="card-title">Product Categories</h5>
                </div>
                <div className="card-footer">
                  <p className="card-text">No product categories exist. .</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body">
                  <h5 className="card-title">cart</h5>
                </div>
                <div className="card-footer">
                  <p className="card-text">No products in the cart.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body">
                  <h5 className="card-title">ajax search</h5>
                </div>
                <div className="card-footer">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for products..."
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      style={{ borderRadius: "0px" }}
                    />

                    <button className="btn " style={{ borderRadius: "0px" }}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-12">
              <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body">
                  <h5 className="card-title">compare</h5>
                </div>
                <div className="card-footer">
                  <p className="card-text">No products in the compare.</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products..."
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    style={{ borderRadius: "0px" }}
                  />

                  <button
                    className="btn btn-danger "
                    style={{ borderRadius: "0px" }}
                  >
                    clear all
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-12">
              <div className="card " style={{ borderRadius: "0px" }}>
                <div className="card-body">
                  <h5 className="card-title">recent reviews</h5>
                </div>
                <div className="card-footer">
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src={urunler[0].img}
                        alt={urunler[0].name}
                      />
                    </div>
                    <div className="col-md-8">
                      <h6>{urunler[0].name}</h6>
                      <p className="card-text">Price: ${urunler[0].price}</p>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src={urunler[1].img}
                        alt={urunler[1].name}
                      />
                    </div>
                    <div className="col-md-8">
                      <h6>{urunler[1].name}</h6>
                      <p className="card-text">Price: ${urunler[1].price}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="img-fluid"
                        src={urunler[2].img}
                        alt={urunler[2].name}
                      />
                    </div>
                    <div className="col-md-8">
                      <h6>{urunler[2].name}</h6>
                      <p className="card-text">Price: ${urunler[2].price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-9">
              <h3>dresses</h3>
            </div>
            <div className="col-md-3">
              <span style={{ color: "grey" }}>home</span>
              <span>/</span>
              <span>dresses</span>
            </div>
          </div>
          <div class="alert alert-success" role="alert">
            <i class="fa-solid fa-check me-3"></i>
            No products were found matching your selection.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dress;
