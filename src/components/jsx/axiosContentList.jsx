import request from "../../api/service.js"
import React from "react"
import { Table, Tag, Image, Card, Divider, Drawer } from 'antd'
class Listview extends React.Component {
	constructor() {
		super()
		this.state = {
			listUrl: "/wxList.php",//文章列表
			dataLists: [],
			currLoad: false,
			visible: false,
			columns: [
				{
					title: 'ID',
					dataIndex: 'id',
					key: 'id',
					defaultSortOrder: 'descend',
				},
				{
					title: '时间戳',
					dataIndex: 'posttime',
					key: 'posttime',
					editable: true
				},
				{
					title: '标题',
					dataIndex: 'title',
					key: 'title',
					ellipsis: true,
				},
				{
					title: '图片',
					dataIndex: 'picurl',
					key: 'picurl',
					render(picurl) {
						return (
							<Image src={picurl} style={{ width: '30px', height: 'auto' }} />
						)
					}
				},
				{
					title: '标签',
					dataIndex: 'rating',
					key: 'rating',
					render(rating) {
						{
							let color = rating ? 'geekblue' : 'green'
							let key = rating ? rating : 'BQ'
							return (
								<Tag color={color} key={key}>
									{key}
								</Tag>
							)
						}
					}
				},
			]
		}
	}
	render() {
		return (
			<div>
				<Card title="点击每一行查看详情">
					<Divider orientation="center" plain>table 数据</Divider>
					<Table

						style={{ position: 'relative', cursor: "pointer" }}
						onRow={(record, index) => ({ onClick: () => { this.currRow(record, index) } })}
						onHeaderRow={record => ({ onClick: () => this.currHead(record) })}
						sticky loading={this.state.currLoad} bordered pagination={false}
						dataSource={this.state.dataLists}
						columns={this.state.columns} />
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
						getContainer={false}
						style={{ position: 'absolute' }}
					>
						<p>Some contents...</p>
					</Drawer>
				</Card>
			</div>
		)
	}
	/**
	 * @function 当前Table点击每一行的数据
	 */
	currRow = (record, index) => {
		this.setState({
			visible: true,
		});
		console.log(record)
		console.log(index)
	}
	/**
	 * @function 获取表头数据
	 */
	currHead = (head) => {
		console.log(head)
	}
	onClose = () => {
		this.setState({
			visible: false,
		});
	};
	//页面挂载开始
	componentWillMount() {

	}
	//数据请求
	componentDidMount() {
		this.getcontentList()
	}
	/**
	 * @function 获取到列表信息
	 */
	getcontentList() {
		this.setState({
			currLoad: true
		})
		request.ajax(this.state.listUrl, 'get').then(res => {
			this.setState({
				dataLists: res.data
			}, () => {
				this.setState({
					currLoad: this.state.dataLists ? false : true
				})
				console.log(this.state.dataLists)
			})
			console.log(res)
		}).catch(err => {
			this.setState({
				currLoad: false
			})
			console.log(err)
		})
	}
	successFunc(msg) {
		console.log(msg)
	}
}

export default Listview