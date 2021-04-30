import React from 'react'
import Com2 from './Component2.jsx'
class Arg1 extends React.Component {
    constructor() {
        super()
        this.currInput = React.createRef()
        this.state = {
            user: {
                name: "jim",
                age: 35,
                address: "HZ-CN"
            },
            listArr: [{ kl: 'apple', id: 1 }, { kl: 'huawei', id: 2 }, { kl: 'meizu', id: 3 }, { kl: 'xiaomi', id: 4 }, { kl: 'T', id: 5 }]
        }
    }
    changeVal = () => {
        console.log(this.state.listArr);
        // this.setState({
        //     list: this.state.list.push({ kl: this.currInput.current.value, id: this.state.list.length + 1 })
        // })
    }
    componentDidUpdate() {

    }
    addList = () => {
        console.log(this.currInput.current.value);
        let tempObj = this.state.listArr
        tempObj.push({ kl: this.currInput.current.value, id: this.state.listArr.length + 1 })
        this.setState({
            listArr: tempObj
        }, () => {
            console.log(this.state.listArr);
        })
    }
    render() {
        return (
            <div>
                <input onChange={() => this.changeVal()} ref={this.currInput}></input>
                <br />
                <button onClick={() => this.addList()}>点击更改当前组件的值</button>
                <Com2 {...this.state.user} list={this.state.listArr}></Com2>
            </div>
        )
    }
}
export default Arg1