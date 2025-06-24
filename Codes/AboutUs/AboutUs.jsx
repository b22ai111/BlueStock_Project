import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Bluestock?",
      answer:
        "Bluestock is a mobile app designed for market learning, analytics, and trading discussions.",
    },
    {
      question: "What platforms does Bluestock support?",
      answer: "Bluestock supports Android, iOS, and web browsers.",
    },
    {
      question: "Is there educational content on the app?",
      answer:
        "Yes, Bluestock offers learning materials, expert insights, and discussions.",
    },
    {
      question: "Is Bluestock free to use?",
      answer: "Yes, Bluestock is free for users.",
    },
    {
      question: "How can I get technical support for the app?",
      answer: "You can reach us via chat or email at hello@bluestock.in.",
    },
  ];

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold">
            The Most Active
            <br />
            Community of Traders & Investors
          </h2>
          <p className="mt-3">
            Join now to interact with thousands of active traders and investors
            to learn and share your knowledge on our buzzing forum.
          </p>
          <button className="btn btn-primary">Join Our Community</button>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.imgur.com/KkPQWhl.png"
            alt="Community Discussion"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-5">
        <h4 className="fw-bold">be a part of trading & investments club</h4>
        <div className="row mt-4 justify-content-center">
          <div className="col-md-3">
            <ul className="list-unstyled text-start">
              <li>✔️ rich environment for knowledge exchange.</li>
              <li>✔️ stay connected about the latest stock market.</li>
              <li>
                ✔️ access exclusive community events, webinars, and meet-ups.
              </li>
            </ul>
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <div>
              <p>
                <strong>Dynamic Discussions</strong>
              </p>
              <p>
                <strong>Expert Insights</strong>
              </p>
              <p>
                <strong>Real-Time Interaction</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Cares */}
      <div className="text-center mb-5">
        <h4 className="fw-bold">Team Bluestock Cares</h4>
        <p>Interact with our members to engage, clarify and contribute</p>
        <div className="row justify-content-center">
          <div className="col-md-4 text-start">
            <h5 className="fw-bold">Interact With Our Experts</h5>
            <ul className="list-unstyled mt-3">
              <li>🔵 Get valid suggestions</li>
              <li>🔵 Raise issues or concerns</li>
              <li>🔵 Ask your questions</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.imgur.com/KkPQWhl.png"
              alt="Expert Chat"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="text-center mb-5">
        <h3 className="fw-bold">Recent News</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="bg-light p-3 rounded">
              <h6 className="text-danger fw-bold">Business Standard</h6>
              <p className="small mb-0">
                Rs 20 trillion & rising: AUM of active equity mutual funds
                surges
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded">
              <h6 className="fw-bold">🅾️ Medium</h6>
              <p className="small mb-0">
                Bluestock is a mobile app for stock market learning, analytics,
                and club.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 rounded">
              <h6 className="text-primary fw-bold">BW BusinessWorld</h6>
              <p className="small mb-0">
                Mutual Funds Experience Fourfold Surge In NFO Collections,
                Reaching Rs 22,000 Cr In Q2
              </p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-primary">
          Media & Press Realease <span>&#x2192;</span>
        </p>
      </div>

      {/* Join Us Section */}
      <div
        className="p-5 text-white rounded mb-5"
        style={{ backgroundColor: "#6c85f5" }}
      >
        <h4>Want to join us ?</h4>
        <p className="mb-3">
          We’re taking complicated stuff and making it super simple. Our teams
          are full of smart and savvy folks working on challenging tasks.
        </p>
        <p className="mb-4">
          And we’re always looking for customer-obsessed people. Think you’re
          customer-focused enough? Write to us at{" "}
          <strong>hello@bluestock.in</strong>.
        </p>
        <button className="btn btn-dark">APPLY NOW</button>
      </div>

      {/* FAQ Section */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4">FREQUENTLY ASKED QUESTIONS</h3>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item mb-2" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    openFAQ === index ? "" : "collapsed"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                className={`accordion-collapse collapse ${
                  openFAQ === index ? "show" : ""
                }`}
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
