import React, {useState} from "react";

import "./form.css";
import { Food1, Food2, Food3, Food4 } from "../../static/icons";


const FormFood = ({
  data,
  url,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);
  const [up, setUp] = useState(data?.up);
  const [down, setDown]   = useState(data?.down);

  const sendFood = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level, up: up, down: down})
    };

    fetch(`${url}/api/status/food`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      { level == 1 && <img src={Food1} alt="icon" id="Food1" /> }
      { level == 2 && <img src={Food2} alt="icon" id="Food2" /> }
      { level == 3 && <img src={Food3} alt="icon" id="Food3" /> }
      { level == 4 && <img src={Food4} alt="icon" id="Food4" /> }
    </div>
      Level:
      <input
      style={{margin: 5}}
      type="number"
      min={1}
      max={4}
      value={level}
      onChange={(evt) => setLevel(evt.target.value)}
      />
      ↑
      <input
      style={{margin: 5}}
      type="number"
      min={0}
      max={2}
      value={up}
      onChange={(evt) => setUp(evt.target.value)}
      />
      ↓
      <input
      style={{margin: 5}}
      type="number"
      min={0}
      max={2}
      value={down}
      onChange={(evt) => setDown(evt.target.value)}
      />
      <button onClick={sendFood} style={{margin: 'auto', height: 35}}> Save </button>
    </div>
  );
};

export default FormFood;
