import React from "react";
import { redirect } from "react-router-dom";
const Work = ({ is_login }) => {
  !is_login ? (
    redirect("/login")
  ) : (
    <div className="work">
      <h2>Work Shop</h2>
      <div className="calcule-inputs">
        <input type="number" id="numA" placeholder="numberA" />
        <input type="number" id="numB" placeholder="numberB" />
      </div>
      <button>Send</button>
    </div>
  );
};
export default Work;
