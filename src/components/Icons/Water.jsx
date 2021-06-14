import React, { useEffect, useState } from "react";
import { Up0, Up1, Up2, Down0, Down1, Down2 } from "../../static/icons";
import { Water1, Water2, Water3, Water4 } from "../../static/icons";

const Water = ({
  icon = {},
  ...props
}) => {
  return (
    <div className="icon">
      { icon?.up == 0 && <img src={Up0} alt="icon"  />}
      { icon?.up == 1 && <img src={Up1} alt="icon" />}
      { icon?.up == 2 && <img src={Up2} alt="icon" />}
      { icon?.level == 1 && <img src={Water1} alt="icon" id="Water1" /> }
      { icon?.level == 2 && <img src={Water2} alt="icon" id="Water2" /> }
      { icon?.level == 3 && <img src={Water3} alt="icon" id="Water3" /> }
      { icon?.level == 4 && <img src={Water4} alt="icon" id="Water4" /> }
      { icon?.down == 0 && <img src={Down0} alt="icon" />}
      { icon?.down == 1 && <img src={Down1} alt="icon" />}
      { icon?.down == 2 && <img src={Down2} alt="icon" />}
    </div>
  );
};

export default Water;
