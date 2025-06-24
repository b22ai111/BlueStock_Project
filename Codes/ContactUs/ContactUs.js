import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  return (
    <div
      className="container py-5 position-relative"
      style={{ paddingBottom: "200px" }}
    >
      {/* Breadcrumb */}
      <div className="mb-3">
        <small className="text-muted">Home &gt; Contact Us</small>
      </div>

      {/* Heading */}
      <h2 className="fw-bold mb-4">How Can We Help You?</h2>

      {/* Contact Options */}
      <div className="row g-4 mb-5">
        {/* Email Us */}
        <div className="col-md-6">
          <div className="border rounded p-4 h-100">
            <h6 className="fw-semibold mb-2">Email us</h6>
            <p className="text-muted mb-3">
              One of our agents will respond at the earliest
            </p>
            <div className="d-flex justify-content-between align-items-center bg-light px-3 py-2 rounded">
              <span className="text-primary fw-semibold">
                hello@bluestock.in
              </span>
              <span className="text-primary fs-5">&#8594;</span>
            </div>
          </div>
        </div>

        {/* Chat Us */}
        <div className="col-md-6">
          <div className="border rounded p-4 h-100">
            <h6 className="fw-semibold mb-2">Chat us</h6>
            <p className="text-muted mb-3">Available from 8:00AM to 5:00PM</p>
            <div className="d-flex justify-content-between align-items-center bg-light px-3 py-2 rounded">
              <span className="text-primary fw-semibold">Open Chat</span>
              <span className="text-primary fs-5">&#8594;</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="text-white text-center py-5 rounded position-relative"
        style={{ backgroundColor: "#4e4cff" }}
      >
        <h3 className="fw-bold">Interact With Us in Our Active Community</h3>
        <p className="mb-4">
          Ask questions or discuss anything related to investing or trading
          <br />
          in the most active trading & investing community
        </p>
        <button className="btn btn-dark rounded-pill px-4 py-2">
          JOIN NOW
        </button>
      </div>

      {/* QR Code Floating Card */}
      <div
        className="position-absolute"
        style={{ bottom: "30px", left: "30px" }}
      >
        <div
          className="bg-white border rounded p-3 text-center shadow"
          style={{ width: "160px" }}
        >
          <small className="fw-semibold d-block mb-2">
            Download Bluestock
            <br />
            Mobile App
          </small>
          <img
            src="https://chart.googleapis.com/chart?cht=qr&chs=120x120&chl=https://play.google.com/store"
            alt="QR code"
            className="img-fluid"
          />
          <div className="d-flex justify-content-center mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
