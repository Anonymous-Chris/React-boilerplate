import React from "react";
import FancyBorder from "./FancyBorder";
import Component1 from "./Component1";
import Component2 from "./Component2";
function WelcomeDialog() {
  return (
    <FancyBorder
      color="blue"
      component1={<Component1 />}
      component2={<Component2 />}
    >
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export default WelcomeDialog;
