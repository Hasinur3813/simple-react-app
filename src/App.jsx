import React, { Component } from "react";
import "./index.css";
import Form from "./form/index";

class App extends Component {
  state = {
    users: [],
  };
  getUsers = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
    console.log(user);
  };
  render() {
    return (
      <div className="flex justify-between flex-col md:flex-row gap-10">
        <Form getUsers={this.getUsers} />
        <div>
          <h1 className=" font-semibold text-xl text-center text-white">
            All Registered Users
          </h1>
          <div>
            <ul className="bg-white rounded overflow-auto w-82 p-2">
              <table className="w-full border-collapse">
                <tr className="flex justify-between gap-5">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
                {this.state.users.map((user) => {
                  return (
                    <tr className="flex justify-between gap-5">
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                  );
                })}
              </table>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
