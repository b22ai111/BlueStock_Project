import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Community() {
  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <div className="mb-3">
        <small className="text-muted">Home &gt; Community</small>
      </div>

      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
            The Most Active Community of <br /> Traders & Investors
          </h2>
          <p className="text-muted">
            Join now to interact with thousands of active traders and investors
            to learn and share your knowledge on our buzzing forum.
          </p>
          <button className="btn btn-primary mt-3">Join Our Community</button>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/TKLnRQT/community-chat-ui.png" // Replace with actual image if available
            alt="Community UI"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Join Benefits Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h4 className="fw-semibold text-capitalize">
            be a part of trading & investments club
          </h4>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">✓ rich environment for knowledge exchange.</li>
            <li className="mb-2">
              ✓ stay connected about the latest stock market
            </li>
            <li className="mb-2">
              ✓ Access exclusive community events, webinars, and meet-ups
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <div className="d-flex justify-content-center gap-3">
            <div className="bg-light p-3 rounded">Dynamic Discussions</div>
            <div className="bg-light p-3 rounded">Expert Insights</div>
            <div className="bg-light p-3 rounded">Real-Time Interaction</div>
          </div>
        </div>
      </div>

      {/* Team Cares Section */}
      <div className="text-center mb-5">
        <h4 className="fw-bold">Team Bluestock Cares</h4>
        <p className="text-muted">
          Interact with our members to engage, clarify and contribute
        </p>
      </div>

      {/* Expert Interaction Section */}
      <div className="row">
        <div className="col-md-6">
          <h5 className="fw-bold mb-4">Interact With Our Experts</h5>
          <ul className="list-unstyled">
            <li className="mb-3">◉ Get valid suggestions</li>
            <li className="mb-3">◉ Raise issues or concerns</li>
            <li className="mb-3">◉ Ask your questions</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/DkdbkKf/expert-replies-ui.png" // Replace with actual image if available
            alt="Expert UI"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
