import React, {useState} from "react";

import "./form.css";
import { Up0, Corte1, Corte2, Virus, Pastilla } from "../../static/icons";


const FormHealth = ({
  data,
  url,
  ...props
}) => {

  const [level, setLevel] = useState(data?.level);
  const [pill, setPill]   = useState(data?.pill);

  const sendOther = () => {
    console.log()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({level: level, pill: pill })
    };

    fetch(`${url}/api/status/other`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  };

  return (
    <div className="box">
    <div className="icon" >
      { level == 0 && <img src={Up0} alt="icon" id="Up0" /> }
      { level == 1 && <img src={Corte1} alt="icon" id="Corte1" /> }
      { level == 2 && <img src={Corte2} alt="icon" id="Corte2" /> }
      { level == 3 && <img src={Virus} alt="icon" id="Virus" /> }
      { level == 4 && <img src={Pastilla} alt="icon" id="Pastilla" /> }
    </div>
      Level:
      <input
      style={{margin: 5}}
      type="number"
      min={0}
      max={3}
      value={level}
      onChange={(evt) => setLevel(evt.target.value)}
      />
      Pill:
      <input type="checkbox" id="pill" name="Pill" value={pill} onClick={(evt) => setPill(evt.target.checked)}/>
      <button onClick={sendOther} style={{margin: 'auto', height: 35}}> Save </button>
    </div>
  );
};

export default FormHealth;
