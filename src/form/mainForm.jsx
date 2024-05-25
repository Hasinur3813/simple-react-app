import React from "react";
import InputText from "./inputName";
import "../index.css";

const MainForm = (props) => {
  return (
    <form onSubmit={props.submitForm}>
      <InputText
        name="name"
        type="text"
        label="Enter your name:"
        placeholder="Enter your name"
        onChange={props.handleChange}
        value={props.state.name}
        error={props.errors.name}
      />

      <InputText
        name="email"
        type="email"
        label="Enter E-mail:"
        placeholder="Enter email"
        value={props.state.email}
        onChange={props.handleChange}
        error={props.errors.email}
      />
      <InputText
        name="password"
        type="password"
        label="Enter Password:"
        placeholder="*******"
        value={props.state.password}
        onChange={props.handleChange}
        error={props.errors.password}
        pnm={props.errors.pnm}
      />
      <InputText
        name="confirmPassword"
        type="password"
        label="Confirm Password:"
        placeholder="*******"
        value={props.state.confirmPassword}
        onChange={props.handleChange}
        error={props.errors.confirmPassword}
        pnm={props.errors.pnm}
      />

      <div className="text-center">
        <input type="submit" value="Singup" className="submitBtn" />
      </div>
    </form>
  );
};

export default MainForm;
