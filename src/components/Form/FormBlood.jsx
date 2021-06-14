import React, {useState} from "react";

import "./form.css";
import { Blood1, Blood2, Blood3, Blood4 } from "../../static/icons";

const URL = process.env.API_URL || 'http://localhost:3001';

const FormBlood = ({
  data,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);
  const [up, setUp] = useState(data?.up);
  const [down, setDown]   = useState(data?.down);

  const sendBlood = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level, up: up, down: down})
    };

    fetch(`${URL}/api/status/blood`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      { level == 1 && <img src={Blood1} alt="icon" id="Blood1" /> }
      { level == 2 && <img src={Blood2} alt="icon" id="Blood2" /> }
      { level == 3 && <img src={Blood3} alt="icon" id="Blood3" /> }
      { level == 4 && <img src={Blood4} alt="icon" id="Blood4" /> }
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
      <button onClick={sendBlood} style={{margin: 'auto', height: 35}}> Save </button>
    </div>
  );
};

export default FormBlood;
