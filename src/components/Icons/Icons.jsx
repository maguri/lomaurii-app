import React from "react";

import "./icons.css";
import Other from "./Other";
import Water from "./Water";
import Food from "./Food";
import Blood from "./Blood";
import Health from "./Health";
import Temp from "./Temp";
import Pill from "./Pill";

const Icons = ({
  icons = {},
  ...props
}) => {
  return (
    <div className="right-down">
      <Health icon={icons["Health"]} />
      <Blood  icon={icons["Blood"]} />
      <Temp   icon={icons["Temp"]} />
      <Food   icon={icons["Food"]} />
      <Water  icon={icons["Water"]} />
      <Other  icon={icons["Other"]}/>
      <Pill   icon={icons["Other"]}/>
    </div>
  );
};

export default Icons;
