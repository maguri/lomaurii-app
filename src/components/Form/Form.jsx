import React from "react";

import "./form.css";
import FormOther from "./FormOther";
import FormWater from "./FormWater";
import FormFood from "./FormFood";
import FormBlood from "./FormBlood";
import FormHealth from "./FormHealth";
import FormTemp from "./FormTemp";
import FormStamina from "./FormStamina";


const Form = ({
  data = {},
  ...props
}) => {
  return (
    <div className="box-center">
      <FormOther
        data={data?.icons["Other"]}
      />
      <FormWater
        data={data?.icons["Water"]}
      />
      <FormFood
        data={data?.icons["Food"]}
      />
      <FormBlood
        data={data?.icons["Blood"]}
      />
      <FormHealth
        data={data?.icons["Health"]}
      />
      <FormTemp
        data={data?.icons["Temp"]}
      />
      <FormStamina
        data={data?.stamina}
      />
    </div>
  );
};

export default Form;
