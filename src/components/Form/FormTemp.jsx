import React, {useState} from "react";

import "./form.css";
import { Temp2} from "../../static/icons";

const URL = process.env.API_URL || 'http://localhost:3001';

const FormTemp = ({
  data,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);
  const [up, setUp] = useState(data?.up);
  const [down, setDown]   = useState(data?.down);

  const sendTemp = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level, up: up, down: down})
    };

    fetch(`${URL}/api/status/temp`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      { level == 1 && <img src={''} alt="icon" id="Temp1" /> }
      { level == 2 && <img src={Temp2} alt="icon" id="Temp2" /> }
      { level == 3 && <img src={''} alt="icon" id="Temp3" /> }
    </div>
      Level:
      <input
      style={{margin: 5}}
      type="number"
      min={2}
      max={2}
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
      <button onClick={sendTemp} style={{margin: 'auto', height: 35}}> Save </button>
    </div>
  );
};

export default FormTemp;
