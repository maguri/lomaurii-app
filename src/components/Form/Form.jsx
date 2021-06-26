import React from "react";

import "./form.css";
import FormOther from "./FormOther";
import FormWater from "./FormWater";
import FormFood from "./FormFood";
import FormBlood from "./FormBlood";
import FormHealth from "./FormHealth";
import FormTemp from "./FormTemp";
import FormStamina from "./FormStamina";

const URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : `${window.location.protocol}//${window.location.host}`;

const Form = ({
  data = {},
  ...props
}) => {
  return (
    <div className="box-center">
      <FormOther
        data={data?.icons["Other"]}
        url={URL}
      />
      <FormWater
        data={data?.icons["Water"]}
        url={URL}
      />
      <FormFood
        data={data?.icons["Food"]}
        url={URL}
      />
      <FormBlood
        data={data?.icons["Blood"]}
        url={URL}
      />
      <FormHealth
        data={data?.icons["Health"]}
        url={URL}
      />
      <FormTemp
        data={data?.icons["Temp"]}
        url={URL}
      />
      <FormStamina
        data={data?.stamina}
        url={URL}
      />
    </div>
  );
};

export default Form;
