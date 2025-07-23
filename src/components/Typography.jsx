function Typography() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h4>Typography</h4>
            <h6>headinga</h6>
            <h1 className="text-uppercase m-3 mt-4"> header one</h1>
            <h2 className="text-uppercase m-3"> header two</h2>
            <h3 className="text-uppercase m-3"> header three</h3>
            <h4 className="text-uppercase m-3"> header four</h4>
            <h5 className="text-uppercase m-3"> header five</h5>
            <h6 className="text-uppercase m-3"> header six</h6>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h4>tables</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th>arrangement</th>
                  <th>name</th>
                  <th>number</th>
                  <th>gmail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>muhammed</td>
                  <td>016310384</td>
                  <td>kher@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>unorder lists (nested)</h3>
            <ul>
              <li>
                list item one
                <ul>
                  <li>
                    list item one
                    <ul>
                      <li>list item one</li>
                      <li>list item two</li>
                      <li>list item three</li>
                      <li>list item four</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </li>

                  <li>liste item two</li>
                  <li>liste item three</li>
                  <li>liste item four</li>
                </ul>
              </li>
              <li>liste item two</li>
              <li>liste item three</li>
              <li>liste item four</li>
            </ul>
          </div>
          <div className="col-md-12">
            <h3>order lists (nested)</h3>
            <ol>
              <li>
                list item one
                <ol>
                  <li>
                    list item one
                    <ol>
                      <li>list item one</li>
                      <li>list item two</li>
                      <li>list item three</li>
                      <li>list item four</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                  </li>

                  <li>liste item two</li>
                  <li>liste item three</li>
                  <li>liste item four</li>
                </ol>
              </li>
              <li>liste item two</li>
              <li>liste item three</li>
              <li>liste item four</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default Typography;
