function Pricing() {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-12 ">
            <h4 className="text-uppercase">pricing table</h4>
          </div>
        </div>
        <div className="row mt-5 justify-content-around">
          <div
            className="col-md-3 text-center"
            style={{ border: "1px solid #1fc0a0" }}
          >
            <h1
              className=" mt-4"
              style={{ color: "#251679ff", fontWeight: "bold" }}
            >
              $10
            </h1>
            <p>MONTHLY</p>
            <p
              className=" py-3 px-5  rounded-pill"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              standard
            </p>
            <ul className="list-unstyled " style={{color:"#251679ff"}}>
              <li>50 GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50 GB Monthly Bandwidth</li>
              <li>10 Subdomains</li>
              <li>15 Domains</li>
            </ul>
             <button
              className=" btn py-3 px-5 mb-4  rounded-0"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              <h4>sing up</h4>
            </button>
          </div>
          <div
            className="col-md-3 text-center"
            style={{ border: "1px solid #1fc0a0" }}
          >
            <h1
              className=" mt-4"
              style={{ color: "#251679ff", fontWeight: "bold" }}
            >
              $20
            </h1>
            <p>MONTHLY</p>
            <p
              className=" py-3 px-5  rounded-pill"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              standard
            </p>
            <ul className="list-unstyled " style={{color:"#251679ff"}}>
              <li>50 GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50 GB Monthly Bandwidth</li>
              <li>10 Subdomains</li>
              <li>15 Domains</li>
            </ul>
             <button
              className=" btn py-3 px-5 mb-4  rounded-0"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              <h4>sing up</h4>
            </button>
          </div>
          <div
            className="col-md-3 text-center"
            style={{ border: "1px solid #1fc0a0" }}
          >
            <h1
              className=" mt-4"
              style={{ color: "#251679ff", fontWeight: "bold" }}
            >
              $30
            </h1>
            <p>MONTHLY</p>
            <p
              className=" py-3 px-5  rounded-pill"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              standard
            </p>
            <ul className="list-unstyled " style={{color:"#251679ff"}}>
              <li>50 GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50 GB Monthly Bandwidth</li>
              <li>10 Subdomains</li>
              <li>15 Domains</li>
            </ul>
             <button
              className=" btn py-3 px-5 mb-4  rounded-0"
              style={{
                color: "#1fc0a0 ",
                backgroundColor: "#e9e8e8ff",
                display: "inline-block",
              }}
            >
              <h4>sing up</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pricing;
