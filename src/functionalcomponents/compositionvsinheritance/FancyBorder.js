import { useState } from "react";

export default function FancyBorder(props) {
  const [value, setValue] = useState("component1");

  var changeVal = () => {
    if (value === "component1") {
      setValue("component2");
    } else {
      setValue("component1");
    }
  };
  console.log(props);
  return (
    <div className={"FancyBorder " + props.color}>
      {props.children}

      <button onClick={changeVal}>Click me</button>

      <p>{props[value]}</p>
    </div>
  );
}
