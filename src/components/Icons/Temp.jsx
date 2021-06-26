import React from "react";
import { Up0, Up1, Up2, Down0, Down1, Down2 } from "../../static/icons";
import { Temp1, Temp2, Temp3, Temp4, Temp5 } from "../../static/icons";

const Temp = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      { icon?.up == 0 && <img src={Up0} alt="icon"  />}
      { icon?.up == 1 && <img src={Up1} alt="icon" />}
      { icon?.up == 2 && <img src={Up2} alt="icon" />}
      { icon?.level == 1 && <img src={Temp1} alt="icon" id="Temp1" className="icon-border" /> }
      { icon?.level == 2 && <img src={Temp2} alt="icon" id="Temp2" className="icon-border" /> }
      { icon?.level == 3 && <img src={Temp3} alt="icon" id="Temp3" className="icon-border" /> }
      { icon?.level == 4 && <img src={Temp4} alt="icon" id="Temp4" className="icon-border" /> }
      { icon?.level == 5 && <img src={Temp5} alt="icon" id="Temp5" className="icon-border" /> }
      { icon?.down == 0 && <img src={Down0} alt="icon" />}
      { icon?.down == 1 && <img src={Down1} alt="icon" />}
      { icon?.down == 2 && <img src={Down2} alt="icon" />}
    </div>
  );
};

export default Temp;
