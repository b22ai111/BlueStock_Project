import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./ContactUs"; //Check file location

function App() {
  return (
    <div>
      <header className="py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <h4 className="m-0 fw-bold">BLUESTOCK</h4>
          <div>
            <button className="btn btn-outline-primary me-2">Sign In</button>
            <button className="btn btn-primary">Sign Up Now</button>
          </div>
        </div>
      </header>

      <main>
        <ContactUs />
      </main>

      <footer className="text-center text-muted py-4 border-top mt-5">
        &copy; {new Date().getFullYear()} Bluestock. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
