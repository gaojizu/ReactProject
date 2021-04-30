/**
 * @author Clearlove
 * @aim 示例父子组件传值 - 父组件
 * @date 2021-04-08
 * @implements class extend React.Component
 */
import React from 'react'
import Children from './children'
import '../common.css'
class Father extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.currInput = React.createRef()
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div className="f-card">
                <div className="f-content">
                    <input className="f-input" ref={this.currInput}></input>
                    <button className="f-btn" onClick={() => this.addItem()}>添加</button>
                </div>
                <div className="f-child">
                    <Children deleteCurrItem={() => this.deletedItem()} content={this.state.list} />
                </div>
            </div>
        )
    }
    /**
     * @function addItem 点击新加一个项到list中
     */
    addItem = () => {
        let tempArr = this.state.list
        if (this.currInput.current.value && this.currInput.current.value.length < 10) {
            if (tempArr.includes(this.currInput.current.value)) {
                alert("请不要输入重复元素！！！")
            } else {
                if (tempArr.length > 9) {
                    alert("最多输入十条数据！！！")
                    return false
                } else {
                    tempArr.push(this.currInput.current.value)
                    this.setState({
                        list: tempArr
                    })
                }
            }
        } else {
            alert("请输入合适的内容进行添加！！！")
        }
    }
    /**
     * @function deletedItem 根据下标进行list数组的删除
     * @param arg 数组的下标
     */
    deletedItem = (arg) => {
        let temparr = this.state.list
        temparr.splice(arg, 1)
        this.setState({
            list: temparr
        }, () => {
            console.log(this.state.list);
        })
    }
}
export default Father