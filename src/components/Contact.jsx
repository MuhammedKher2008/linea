function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12  text-uppercase">
            <h4 className="">contact us</h4>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <h4>get im toush</h4>
            <p className="mt-4">
              We are very approachable and would love to speak to you. Feel free
              to call, send us an email, Tweet us or simply complete the enquiry
              form.
            </p>
            <div className="row mt-5">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-1">
                    <i class="fa-solid fa-location-dot fs-2"></i>
                  </div>
                  <div className="col-md-6">
                    <h5>Find us at the office</h5>
                    <p>163 Duane Avenue,</p>
                    <p>Abant Street,</p>
                    <p>CA 95352</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row mt-4">
                  <div className="col-md-1">
                    <i class="fa-solid fa-phone fs-2"></i>
                  </div>
                  <div className="col-md-6">
                    <h5>Give us a ring</h5>
                    <p>John Doe ,</p>
                    <p>+01 123 456 789 ,</p>
                    <p>Mon – Fri, 8:00-22:00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row mt-3">
                  <div className="col-md-1">
                    <i class="fa-solid fa-envelope fs-2"></i>
                  </div>
                  <div className="col-md-6">
                    <h5>Support Email</h5>
                    <p>abc@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>send us a message</h4>
            <label for="" class="form-label">
              user name
            </label>
            <input
              type="text"
              class="form-control"
              style={{ borderRadius: "0px", backgroundColor: "#f9f9f9" }}
            />
            <label for="" class="form-label">
              your email
            </label>
            <input
              type="email"
              class="form-control"
              style={{ borderRadius: "0px", backgroundColor: "#f9f9f9" }}
            />
            <label for="" class="form-label">
              subject
            </label>
            <input
              type="email"
              class="form-control"
              style={{ borderRadius: "0px", backgroundColor: "#f9f9f9" }}
            />
            <label for="" class="form-label">
              your message
            </label>
            <textarea
              class="form-control"
              rows={7}
              style={{ borderRadius: "0px", backgroundColor: "#f9f9f9" }}
            ></textarea>
            <button className="w-100 btn btn-dark mt-5" style={{borderRadius:"0px"}}>
                send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
