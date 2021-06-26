import React from "react";
import { Up0, Up1, Up2, Down0, Down1, Down2 } from "../../static/icons";
import { Food1, Food2, Food3, Food4 } from "../../static/icons";
const Food = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      { icon?.up == 0 && <img src={Up0} alt="icon"  />}
      { icon?.up == 1 && <img src={Up1} alt="icon" />}
      { icon?.up == 2 && <img src={Up2} alt="icon" />}
      { icon?.level == 1 && <img src={Food1} alt="icon" id="Food1" /> }
      { icon?.level == 2 && <img src={Food2} alt="icon" id="Food2" /> }
      { icon?.level == 3 && <img src={Food3} alt="icon" id="Food3" /> }
      { icon?.level == 4 && <img src={Food4} alt="icon" id="Food4" /> }
      { icon?.down == 0 && <img src={Down0} alt="icon" />}
      { icon?.down == 1 && <img src={Down1} alt="icon" />}
      { icon?.down == 2 && <img src={Down2} alt="icon" />}
    </div>
  );
};

export default Food;
