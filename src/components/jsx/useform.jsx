import React from "react"
import { Form, Button, Input, Checkbox } from "antd"
class UseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            validastate: "warning"
        }
    }
    /**
     * @function onFinish 
     */
    onFinish = (arg) => {
        console.log(arg);
    }
    onFinishFailed = (arg) => {
        console.log(arg);
    }
    onValuesChange = (arg) => {
        if (arg.username.trim()) {
            this.setState({
                validastate: "success"
            }, () => {

            })
        } else {
            this.setState({
                validastate: "warning"
            }, () => {

            })
        }
        console.log(arg);
    }
    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
            labelAlign: "right",
        }
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        return (
            <Form  {...layout}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                onValuesChange={this.onValuesChange}
            >
                <Form.Item label="labelname" name="username"
                    validateStatus={this.state.validastate}
                    hasFeedback
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="labelpwd" name="userpwd"
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">submit</Button>
                </Form.Item>
            </Form >
        )
    }
}
export default UseForm