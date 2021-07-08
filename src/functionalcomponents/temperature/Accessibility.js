import { useState } from "react";

const Accessibility = () => {
  const [stateOne, setStateOne] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);

  const [stateThree, setStateThree] = useState(false);

  var changeState = (val) => {
    if (val === 1) {
      setStateOne(!stateOne);
    } else if (val === 2) {
      setStateTwo(!stateTwo);
    } else if (val === 3) {
      setStateThree(!stateThree);
    }
  };
  return (
    <>
      <button onClick={() => changeState(1)}>One</button>
      <button onClick={() => changeState(2)}>Two</button>

      <button onClick={() => changeState(3)}>Three</button>
      <>
        {stateOne && (
          <ul>
            <li>
              <button>Option 1</button>
            </li>
            <li>
              <button>Option 2</button>
            </li>
            <li>
              <button>Option 3</button>
            </li>
          </ul>
        )}
      </>
      <>{stateTwo && <span>Two</span>}</>

      <>{stateThree && <span>three</span>}</>
    </>
  );
};

export default Accessibility;
