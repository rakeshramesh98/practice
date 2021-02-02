import React, { useState } from "react";
import "./App.css";

function Jeevan() {
  const [submitted, setFormSubmitted] = useState(false);
  return (
    <div className="App App-header">
      <h3>Registration form</h3>
      {submitted ? (
        <div id="success">Registration request submitted successfully</div>
      ) : (
        <form>
          <div className="form-group">
            <input
              className="form-control m-2"
              name="firstName"
              id="firstName"
              placeholder="First name"
            />
            <input
              className="form-control m-2"
              name="lastName"
              id="lastName"
              placeholder="Last name"
            />
            <input
              className="form-control m-2"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
            />
            <input
              className="form-control m-2"
              name="username"
              id="username"
              type="text"
              placeholder="User name"
            />
            <input
              className="form-control m-2"
              name="password"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button
              className="btn btn-success m-2"
              type="submit"
              id="submit"
              onClick={() => setFormSubmitted(true)}
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Jeevan;
