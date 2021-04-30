/**
 * @author claralove
 * @prop Page 组件
 * @version 4.15.3
 * @class Rpage
 */
import React from 'react'
import { Pagination } from "antd"
class Rpage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            pageSize: this.props.pageSize ? this.props.pageSize : 10
        }
    }
    /**
     * @function onChange 页码改变
     * @param page 当前页码
     * @param pageSize 当前每页显示条数
     */
    onChange = (page, pageSize) => {
        this.setState({
            current: page,
            pageSize: pageSize
        }, () => {
            this.props._currPageNo(page, pageSize)
        })
    }
    /**
     * @function onShowSizeChange 每页显示条数改变
     * @param page 当前页码
     * @param pageSize 当前每页显示条数
     */
    onShowSizeChange = (page, pageSize) => {
        this.setState({
            current: page,
            pageSize: pageSize
        }, () => {
            this.props._currPageSize(page, pageSize)
        })
    }

    render() {
        let total = this.props.total ? this.props.total : 100 //总条数
        let showSizeChanger = this.props.showSizeChanger ? this.props.showSizeChanger : true //改变每页条数
        let showQuickJumper = this.props.showQuickJumper ? this.props.showQuickJumper : false // 快速跳转
        let hideOnSinglePage = this.props.hideOnSinglePage ? this.props.hideOnSinglePage : false// 只有一页的时候是不是需要隐藏当前分页
        let size = this.props.size ? this.props.size : "default" //显示分页大小
        return (
            <Pagination
                onChange={this.onChange}
                onShowSizeChange={this.onShowSizeChange}
                total={total}
                showSizeChanger={showSizeChanger}
                showQuickJumper={showQuickJumper}
                pageSize={this.state.pageSize}
                hideOnSinglePage={hideOnSinglePage}
                size={size}
            >
            </Pagination>
        )
    }
}
export default Rpage