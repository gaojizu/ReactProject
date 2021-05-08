import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "this is login",
    };
  }
  render() {
    return <div>{this.state.msg}</div>;
  }
}
export default Login;
