import React, {useState} from "react";

import "./form.css";
import { Health1, Health2, Health3, Health4 } from "../../static/icons";

const URL = process.env.API_URL || 'http://localhost:3001';

const FormHealth = ({
  data,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);
  const [up, setUp] = useState(data?.up);
  const [down, setDown]   = useState(data?.down);

  const sendHealth = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level, up: up, down: down})
    };

    fetch(`${URL}/api/status/health`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      { level == 1 && <img src={Health1} alt="icon" id="Health1" /> }
      { level == 2 && <img src={Health2} alt="icon" id="Health2" /> }
      { level == 3 && <img src={Health3} alt="icon" id="Health3" /> }
      { level == 4 && <img src={Health4} alt="icon" id="Health4" /> }
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
      <button onClick={sendHealth} style={{margin: 'auto', height: 35}}> Save </button>
    </div>
  );
};

export default FormHealth;
