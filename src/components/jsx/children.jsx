/**
 * @author Clearlove
 * @aim 示例父子组件传值 - 子组件
 * @date 2021-04-08
 * @implements class extend React.Component
 */
import React from 'react'
import '../common.css'
class Children extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ul className="item-ul">
                    {this.props.content.length > 0 ? this.props.content.map((item, index) => <li title={"删除" + item} onClick={() => this.deleteCurrItem(index)} key={index}>{item}</li>) : <h2>No Data</h2>}
                </ul>
            </div>
        )
    }
    /**
     * @function deleteCurrItem 根据下标进行删除
     * @param {*} arg 
     */
    deleteCurrItem(arg) {
        //调用父组件中的函数进行执行删除的操作
        this.props.deleteCurrItem(arg)
    }
}
export default Children