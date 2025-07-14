import payament1 from "../assets/payment-1.png";
import payament2 from "../assets/payment-2.png";
import payament3 from "../assets/payment-3.png";
import payament4 from "../assets/payment-4.png";
function Footer() {
  return (
    <footer
      className=" text-white text-center  py-3 mt-5"
      style={{ backgroundColor: "#444444" }}
    >
      <div className="container mt-3">
        <div className="row ">
          <div className="col-md-4">
            <h3>SIGN UP FOR EMAILS:</h3>
          </div>
          <div className="col-md-5">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="col-md-1">
            <button
              className="btn text-white"
              style={{ backgroundColor: "#1fc0a0 " }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#333" }}>
        <div className="row">
          <div className="col-md-12">
            <div className="container mb-5 mt-5">
              <div className="row" style={{ borderBottom: "1px solid #aaa" }}>
                <div
                  className="col-md-3"
                  style={{ borderRight: "1px solid #aaa" }}
                >
                  <h4
                    className="text-start mb-4"
                    style={{
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    Shopping Guide
                  </h4>
                  <ul
                    className="list-unstyled text-start"
                    style={{
                      color: "#aaa",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    <li>blog</li>
                    <li>FAQs</li>
                    <li>payament</li>
                    <li>shipment</li>
                    <li>where is my order ?</li>
                    <li>return policy</li>
                  </ul>
                </div>
                <div
                  className="col-md-3"
                  style={{ borderRight: "1px solid #aaa" }}
                >
                  <h4
                    className="text-start mb-4"
                    style={{
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    style advisor
                  </h4>
                  <ul
                    className="list-unstyled text-start"
                    style={{
                      color: "#aaa",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    <li>your account</li>
                    <li>iformation</li>
                    <li>addresses</li>
                    <li>discount</li>
                    <li>order history</li>
                    <li>order tracking</li>
                  </ul>
                </div>
                <div
                  className="col-md-3"
                  style={{ borderRight: "1px solid #aaa" }}
                >
                  <h4
                    className="text-start mb-4"
                    style={{
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    information
                  </h4>
                  <ul
                    className="list-unstyled text-start"
                    style={{
                      color: "#aaa",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    <li>site map</li>
                    <li>search terms</li>
                    <li>advance search</li>
                    <li>about us</li>
                    <li>contact us</li>
                    <li>suppliers</li>
                    <li>return policy</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4
                    className="text-start mb-4"
                    style={{
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    Shopping Guide
                  </h4>
                  <ul
                    className="list-unstyled text-start"
                    style={{
                      color: "#aaa",
                      fontFamily: "sans-serif",
                      letterSpacing: "1px",
                      fontSize: "15px",
                    }}
                  >
                    <li>
                      <div
                        style={{ backgroundColor: "#1fc0a0" }}
                        className="d-inline-block rounded-circle"
                      >
                        <i className="fa-solid fa-map p-2 text-white"></i>
                      </div>
                      <span style={{ letterSpacing: "1px" }} className="ms-2">
                        123 Main Street, Anytown, CA 12345 USA
                      </span>
                    </li>
                    <li>
                      <div
                        style={{ backgroundColor: "#1fc0a0" }}
                        className="d-inline-block rounded-circle"
                      >
                        <i className="fa-solid fa-phone p-2 text-white"></i>
                      </div>
                      <span className="ms-2">+1 234 567 890</span>
                    </li>
                    <li>
                      <div
                        style={{ backgroundColor: "#1fc0a0" }}
                        className="d-inline-block rounded-circle"
                      >
                        <i className="fa-solid fa-envelope p-2 text-white"></i>
                      </div>
                      <span>example@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 mt-4">
                  <div className=" d-flex justify-content-start">
                    <img
                      src={payament1}
                      alt="Payment Method 1"
                      className="me-2"
                    />
                    <img
                      src={payament2}
                      alt="Payment Method 2"
                      className="me-2"
                    />
                    <img
                      src={payament3}
                      alt="Payment Method 3"
                      className="me-2"
                    />
                    <img src={payament4} alt="Payment Method 4" />
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
            <p className="text-center mb-0" style={{ color: "#aaa" }}>
              © 2023 Your Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
