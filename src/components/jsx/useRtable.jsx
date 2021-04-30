import React from "react"
import Rtable from "../../components/common/Rtable/ComTable.jsx"
class UseRtable extends React.Component {
	state = {
		columns: [{
			title: "公司",
			dataIndex: "company",
			key: "company",
			fixed: 'left',
		}, {
			title: "税号",
			dataIndex: "SNum",
			key: "SNum",
			onCell: (record) => {
				return {
					style: {
						maxWidth: 150,
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						textOverflow: 'ellipsis',
						cursor: 'pointer',
						color: "red"
					},
					onClick: () => { this.currCell(record) }
				}
			}
		}, {
			title: "日期",
			dataIndex: "Sdate",
			key: "Sdate",
			render: (Sdate) => {
				return (
					<span>{new Date().getFullYear()}</span>
				)
			}
		}],
		dataSource: [{
			company: "A公司", SNum: "452019134121234123413454562541353465124282343", Sdate: ""
		}, {
			company: "B公司", SNum: "452076890", Sdate: ""
		}, {
			company: "C公司", SNum: "452012341243", Sdate: ""
		}]
	}
	currCell = (arg1) => {
		console.log(arg1)
	}
	/**
	 * @function getCurrRow 获取到当前行的数据
	 * @param arg1 回调参数
	 */
	getCurrRow = (arg1) => {
		console.log(arg1)
	}
	render() {
		return (
			<Rtable
				getCurrRow={this.getCurrRow}
				dataSource={this.state.dataSource}
				columns={this.state.columns}>
			</Rtable>
		)
	}
}
export default UseRtable