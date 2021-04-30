/**
 * @author claralove
 * @prop Table 组件  
 * @version 4.15.3
 */
import React from "react"
import { Table, Spin, } from "antd"
class Rtable extends React.Component {
	state = {}
	/**
	 * @function currRow 单击获取当前行数据
	 * @param arg1 回调参数，当前行数据
	 * @param arg2 当前行数
	 */
	getCurrRow = (arg1, arg2) => {
		// console.log(arg1)
		// console.log(arg2)
	}
	/**
	 * @function doublecurrRow 双击获取当前行数据
	 * @param arg1 回调参数，当前行数据
	 * @param arg2 当前行数
	 */
	doublecurrRow = (arg1, arg2) => {
		// console.log(arg1)
		// console.log(arg2)
	}
	/**
	 * @function mousecurrRow 鼠标移入获取当前行数据
	 * @param arg1 回调参数，当前行数据
	 * @param arg2 当前行数
	 */
	mousecurrRow = (arg1, arg2) => {
		// console.log(arg1)
		// console.log(arg2)
	}
	render() {
		let dataSource = this.props.dataSource //table 源数据
		let columns = this.props.columns  //table 列选项
		let size = this.props.size ? this.props.size : "default" //表格大小
		let showHeader = this.props.showHeader ? this.props.showHeader : true //是否显示表格头部信息
		let spinning = this.props.spinning ? this.props.spinning : false // 是否显示Loading 默认false
		return (
			<Spin spinning={spinning}>
				<Table
					style={{ cursor: "pointer" }}
					onRow={(record, index) =>
						({
							onClick: () => { this.props.getCurrRow(record, index) },
							onDoubleClick: () => { this.doublecurrRow(record, index) },
							onMouseEnter: () => { this.mousecurrRow(record, index) }
						})}
					size={size}
					pagination={false}
					showHeader={showHeader}
					dataSource={dataSource}
					columns={columns}>
				</Table>
			</Spin>
		)
	}
}
export default Rtable