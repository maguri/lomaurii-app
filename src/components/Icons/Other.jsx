import React from "react";

import { Up0, Corte1, Corte2, Virus, Pastilla } from "../../static/icons";

const Other = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      <img src={Up0} alt="icon"  />
      { icon?.level == 0 && <img src={Up0}      alt="icon" id="Up0" /> }
      { icon?.level == 1 && <img src={Corte1}   alt="icon" id="Corte1" className="icon-border" /> }
      { icon?.level == 2 && <img src={Corte2}   alt="icon" id="Corte2" className="icon-border" /> }
      { icon?.level == 3 && <img src={Virus}    alt="icon" id="Virus" className="icon-border" /> }
      { icon?.level == 4 && <img src={Pastilla} alt="icon" id="Pastilla" className="icon-border" style={{width: '40px', paddingRight: '4px' }}/> }
      <img src={Up0} alt="icon" />
    </div>
  );
};

export default Other;
