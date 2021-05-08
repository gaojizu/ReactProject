import React from "react"
import "../common.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Row, Col, Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
class ComHead extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(), //当前时间
            timerID: '',//计时器
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="h-main">
                <Row>
                    <Col span={2}>
                        <Image className="h-image"
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={17}>
                        <Link className="h-link" to="/">首页</Link>
                        <Link className="h-link" to="comone">Vue</Link>
                        <Link className="h-link" to="comtwo">React</Link>
                        <Link className="h-link" to="comtwo">Angular</Link>
                        <Link className="h-link" to="comtwo">JavaScript</Link>
                        <Link className="h-link" to="comtwo">CSS</Link>
                        <Link className="h-link" to="comtwo">Git</Link>
                        <Link className="h-link" to="comtwo">Sketch</Link>
                        <Link className="h-link" to="comtwo">小程序</Link>
                        <Link className="h-link" to="comtwo">记录生活</Link>
                        <Link className="h-link" to="comtwo">自语</Link>
                        <Link className="h-link" to="comtwo">归档</Link>
                        <Link className="h-link" to="comtwo">图片分享</Link>
                    </Col>
                    <Col span={5}>
                        <Row>
                            <Col span={2}>
                                <Avatar className="h-avatar" size={32} icon={<UserOutlined />} />
                            </Col>
                            <Col span={2}>
                            </Col>
                            <Col span={1}>
                                <p>{this.state.date.toLocaleTimeString()}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default ComHead