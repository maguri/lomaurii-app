import React from "react";

import { Stamina1 } from "../../static/icons";
import "./stamina.css";

const Stamina = ({
  data = { level: 30 },
  ...props
}) => {
const containerStyles = {
    height: 7,
    width: 150,
    backgroundColor: 'rgb(56 56 56)',
    margin: 50,
    marginLeft: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${data.level}%`,
    backgroundColor: '#fff',
    borderRadius: 'inherit',
    textAlign: 'right',
    transitionProperty: 'width',
    transitionDuration: '10s',
    transitionTimingFunction: 'ease',
    transitionDelay: '0s'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div className="left-down">
      <div className="stamina-box">
        <div className="icon">
          <img src={Stamina1} alt="icon" id="Stamina" />
          </div>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stamina;
