import React from "react";

const InputText = (props) => (
  <div className="flex flex-col">
    <label htmlFor={props.name} className="text-sm font-medium ">
      {props.label}
    </label>

    <input
      className={`${
        props.error && "border-2 border-red-500 transition-all duration-75"
      } px-2 rounded-sm my-2 text-sm py-2 focus:outline-green-700`}
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    {props.error && (
      <div>
        <h2 className="text-red-500 leading-0 text-xs mb-2">{props.error}</h2>
      </div>
    )}
  </div>
);
export default InputText;
