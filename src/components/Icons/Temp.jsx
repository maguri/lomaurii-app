import React, { useEffect, useState } from "react";
import { Up0, Up1, Up2, Down0, Down1, Down2 } from "../../static/icons";
import { Temp2 } from "../../static/icons";

const Temp = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      { icon?.up == 0 && <img src={Up0} alt="icon"  />}
      { icon?.up == 1 && <img src={Up1} alt="icon" />}
      { icon?.up == 2 && <img src={Up2} alt="icon" />}
      { false && <img src={''} alt="icon" id="Temp1" /> }
      { true && <img src={Temp2} alt="icon" id="Temp2" /> }
      { false && <img src={''} alt="icon" id="Temp3" /> }
      { icon?.down == 0 && <img src={Down0} alt="icon" />}
      { icon?.down == 1 && <img src={Down1} alt="icon" />}
      { icon?.down == 2 && <img src={Down2} alt="icon" />}
    </div>
  );
};

export default Temp;
