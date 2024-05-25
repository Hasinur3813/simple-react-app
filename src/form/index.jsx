import React from "react";
import MainForm from "./mainForm";
import validate from "./validation";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const errors = validate(this.state);
    const isValid = Object.entries(errors).length === 0;
    if (isValid) {
      this.resetForm();
      setTimeout(() => {
        alert("Singup successful");
      }, 500);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <section className="inline-block">
        <div className="formContainer">
          <h2 className="font-semibold mb-4 text-xl">Create an account</h2>
          <MainForm
            state={this.state}
            handleChange={this.handleChange}
            submitForm={this.submitForm}
            errors={this.state.errors}
          />
        </div>
      </section>
    );
  }
}

export default Form;
