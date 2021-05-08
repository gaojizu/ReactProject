import React from "react";
import ComHead from "../../components/jsx/comHead";
import { Card } from "antd";
import "../../index.css";
const { Meta } = Card;
class ComTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardLists: [
        {
          alt: "example",
          src:
            "http://8.136.246.188:8090/upload/2021/05/6a4b87cadbbc8af1fd287fe41ccad00c-b4724b7e688b407b9f6ad265eea7ee34.jpg",
          title: "Europe Street beat",
          description: "www.instagram.com",
        },
        {
          alt: "example",
          src:
            "http://8.136.246.188:8090/upload/2021/05/af7b1841f2aa583285d5f91712c0ce62-1b41df3f559448a5be3d0657b7138eef.jpg",
          title: "Europe Street beat",
          description: "www.instagram.com",
        },
        {
          alt: "example",
          src:
            "http://8.136.246.188:8090/upload/2021/05/4c41205e25e82b0f81f02a1d2d95b34f-0b88cd13e38f4c729f19ab4e0ecdbf8e.jpg",
          title: "Europe Street beat",
          description: "www.instagram.com",
        },
      ],
    };
  }
  render() {
    let cardList = this.state.cardLists.map((item, index) => {
      return (
        <div key={index}>
          <Card
            hoverable
            style={{ width: 240, margin: 5 }}
            cover={<img alt={item.alt} src={item.src} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </div>
      );
    });
    return (
      <div>
        <ComHead />
        <div className="c-content">{cardList}</div>
      </div>
    );
  }
}

export default ComTwo;
