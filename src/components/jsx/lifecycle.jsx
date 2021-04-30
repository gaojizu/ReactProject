import React from 'react'
class LifeCycle extends React.Component {
    constructor(props) {
        console.log("执行constructor");
        super(props)
        this.state = {
            testValue: "this is state"
        }
    }
    componentWillMount() {
        console.log("componentWillMount...");
    }
    componentDidMount() {
        //这里是可以进行ajax的请求的
        console.log("componentDidMount...");
        //在这里进行值的更新，然后值的更新会导致触发update的生命周期的钩子函数，所以可以在uodate中处理之后的数据，也可以直接在这个函数进行数据的处理
    }
    componentWillUnmount() {
        console.log("componentWillUnmount...");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate...");

    }
    render() {
        console.log("start render...");
        return (
            <div>
                <span>hello LifeCycle {this.state.testValue}</span>
                <br />
                <button onClick={() => this.changeVal()}>点击改变state的值</button>
            </div >
        )
    }
    changeVal() {
        this.setState({
            testValue: "this is changed value"
        }, () => {
            console.log(this.state.testValue);
        })
    }

}
export default LifeCycle