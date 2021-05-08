import React from "react";
import ComHead from "../../components/jsx/comHead";
class ComOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needChangeVlaue: [
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
        { name: "Kim", sex: "man" },
        { name: "Jim", sex: "woman" },
        { name: "Lim", sex: "woman" },
        { name: "Gim", sex: "man" },
      ],
    };
  }
  render() {
    let dataValue = this.state.needChangeVlaue.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{item.name}</li>
          </ul>
        </div>
      );
    });
    return (
      <div>
        <ComHead />
        {dataValue}
      </div>
    );
  }
}

export default ComOne;
