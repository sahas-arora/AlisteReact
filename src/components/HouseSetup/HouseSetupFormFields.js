import React from "react";

let HouseSetupFormFields = props => {
  console.log("The input props of HouseSetupFormFields are:", props.input);
  return (
    <div>
      <label>{props.label}</label>
      <input style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {props.meta.touched && props.meta.error}
      </div>
    </div>
  );
};

export default HouseSetupFormFields;
