import React from 'react'
class Clock extends React.Component {
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
            <div>
                <h3>当前时间：{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
export default Clock