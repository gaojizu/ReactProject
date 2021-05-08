import React from "react";
// import { createStore } from "redux";
/**
 * @function ADD_TODO
 * @param {*} state 当前保存在store中的数据
 * @param {*} action action是一个容器 type - 一个简单的字符串常量，例如ADD, UPDATE, DELETE等，payload - 用于更新状态的数据
 */
// const ADD_TODO = "添加 TODO";
// function addTodo(text) {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// }
// const store = createStore(addTodo);
// store.dispatch({
//   type: "ADD_TODO",
//   payload: "Learn Redux",
// });
// const reducer = function (state, action) {
//   // ...
//   return state;
// };
class RStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div></div>;
  }
}
export default RStore;
