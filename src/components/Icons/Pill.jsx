import React from "react";

import { Up0, Corte1, Corte2, Virus, Pastilla } from "../../static/icons";

const Pill = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon" style={{display: 'block'}}>
      <img src={Up0} alt="icon"  />
      { icon?.pill == true && (icon?.level != 0) && (
          <img src={Pastilla} alt="icon" id="Pastilla" className="icon-border" style={{width: '38px', paddingRight: '4px' }}/>
        )}
      <img src={Up0} alt="icon" />
    </div>
  );
};

export default Pill;
