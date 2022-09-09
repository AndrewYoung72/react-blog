import React from "react";

export default function SignIn() {
  return(
    <div className="form-content">
      <form action="" className="signin-form">
        <input type="text" placeholder="Username..." />
        <input type="text" placeholder="Password..." />
      </form>
      <div className="siBtn">
        <button>Sign In</button>
      </div>
      <div>
      <form action="" className="signup-form">
        <input type="text" placeholder="Username..." />
        <input type="text" placeholder="Email..." />
        <input type="text" placeholder="Password..." />
      </form>
      <div className="suBtn">
        <button>Sign Up</button>
      </div>
      </div>
    </div>
  )
}