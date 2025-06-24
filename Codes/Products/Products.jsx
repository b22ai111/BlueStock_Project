import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {
  const productCards = [
    { id: 1, bgColor: "#ffeae6" },
    { id: 2, bgColor: "#e9e6ff" },
    { id: 3, bgColor: "#e6ffe9" },
    { id: 4, bgColor: "#e9e6ff" },
    { id: 5, bgColor: "#e6ffe9" },
  ];

  return (
    <div className="container py-5">
      {/* Section 1 */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold">
            Best-in-class
            <br />
            Technology & Platforms
          </h1>
          <p className="mt-3">
            Our products & services aim to help active traders & investors in
            India gain a winning edge in the stock markets.
          </p>
        </div>
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#f9fafe",
              width: "100%",
              height: "250px",
              borderRadius: "16px",
            }}
          ></div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="p-4 mb-4 rounded" style={{ backgroundColor: "#e6faec" }}>
        <h5 className="fw-semibold">Diversify Your Portfolio Today!</h5>
        <p className="mb-0">
          Start your investment journey with our user-friendly and secure
          investment platforms.
        </p>
      </div>

      {/* First Row of Cards */}
      <div className="row mb-5">
        {productCards.slice(0, 3).map((card) => (
          <div className="col-md-4 mb-3" key={card.id}>
            <div
              className="border rounded p-3"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                style={{
                  backgroundColor: card.bgColor,
                  width: 40,
                  height: 40,
                  borderRadius: "6px",
                }}
              ></div>
              <h6 className="fw-bold mt-3">Bluestock IPO</h6>
              <p className="mb-0">
                Be the first to apply for IPOs and FPOs listed on the NSE and
                BSE.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <div className="p-4 mb-4 rounded" style={{ backgroundColor: "#e6eaff" }}>
        <h5 className="fw-semibold">
          Grow Your Network and Learn the Stock Market
        </h5>
        <p className="mb-0">
          Our community-based approach encourages you to learn from experts and
          peers while expanding your connections.
        </p>
      </div>

      {/* Second Row of Cards */}
      <div className="row">
        {productCards.slice(3).map((card) => (
          <div className="col-md-4 mb-3" key={card.id}>
            <div
              className="border rounded p-3"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                style={{
                  backgroundColor: card.bgColor,
                  width: 40,
                  height: 40,
                  borderRadius: "6px",
                }}
              ></div>
              <h6 className="fw-bold mt-3">Bluestock IPO</h6>
              <p className="mb-0">
                Be the first to apply for IPOs and FPOs listed on the NSE and
                BSE.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Add-on Section */}
      <section className="py-5">
        <div className="container">
          {/* Highlight Section */}
          <div className="bg-primary bg-opacity-10 p-4 rounded mb-4">
            <h5 className="fw-bold">Make your platform more powerful</h5>
            <p className="mb-0">
              Integrate with our in-house trading platform and build your own
              customized trading applications.
            </p>
          </div>

          {/* Product Card */}
          <div className="row justify-content-start">
            <div className="col-md-4">
              <div className="border rounded p-3 h-100">
                <div
                  className="mb-3"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#e4e1fb",
                  }}
                ></div>
                <h6 className="fw-bold">Bluestock API</h6>
                <p className="mb-0">
                  Be the first to apply for IPOs and FPOs listed on the NSE and
                  BSE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
