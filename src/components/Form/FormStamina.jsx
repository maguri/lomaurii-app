import React, {useState} from "react";

import "./form.css";
import { Stamina1} from "../../static/icons";


const FormStamina = ({
  data,
  url,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);

  const sendStamina = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level})
    };

    fetch(`${url}/api/status/stamina`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      <img src={Stamina1} alt="icon" id="Stamina1" />
    </div>
      Level:
      <input
      style={{margin: 5}}
      type="number"
      min={0}
      max={100}
      value={level}
      onChange={(evt) => setLevel(evt.target.value)}
      />
      <button onClick={sendStamina} style={{marginLeft: '30%', height: 35}}> Save </button>
    </div>
  );
};

export default FormStamina;
