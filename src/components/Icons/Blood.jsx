import React from "react";
import { Up0, Up1, Up2, Down0, Down1, Down2 } from "../../static/icons";
import { Blood1, Blood2, Blood3, Blood4 } from "../../static/icons";

const Blood = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      { icon?.up == 0 && <img src={Up0} alt="icon"  />}
      { icon?.up == 1 && <img src={Up1} alt="icon" />}
      { icon?.up == 2 && <img src={Up2} alt="icon" />}
      { icon?.level == 1 && <img src={Blood1} alt="icon" id="Blood1" /> }
      { icon?.level == 2 && <img src={Blood2} alt="icon" id="Blood2" /> }
      { icon?.level == 3 && <img src={Blood3} alt="icon" id="Blood3" /> }
      { icon?.level == 4 && <img src={Blood4} alt="icon" id="Blood4" /> }
      { icon?.down == 0 && <img src={Down0} alt="icon" />}
      { icon?.down == 1 && <img src={Down1} alt="icon" />}
      { icon?.down == 2 && <img src={Down2} alt="icon" />}
    </div>
  );
};

export default Blood;
