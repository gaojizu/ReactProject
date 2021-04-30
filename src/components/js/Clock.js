import React from "react";
import ReactDOM from "react-dom";
/* class Clock extends React.Component {
    render() {
        return (
            <h3>当前时间：{new Date().toLocaleTimeString()}</h3>
        )
    }
}
setInterval(() => {
    // eslint-disable-next-line no-unused-expressions
    new Clock()
}, 1000);
export default Clock */
function Clock() {
  const element = (
    <div>
      <h2>当前时间： {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementsByClassName("App"));
}
setInterval(() => {
  // eslint-disable-next-line no-unused-expressions
  Clock;
}, 1000);
export default Clock;
