import React from 'react'
class Input extends React.Component {
	constructor() {
		console.log('执行构造器...');
		super()
		this.myRef = React.createRef();
		this.state = {
			val: '',
			defaultObj: {
				user: 'jim',
				age: 25,
				address: 'HZ_CN'
			}
		}
	}
	componentDidMount() {
		console.log('Did mount');
	}
	componentDidUpdate() {
		console.log('Did update');
		console.log('最新的值:' + this.state.val);
	}
	componentWillUnmount() {
		console.log('unmount');
	}
	render() {
		console.log('开始渲染');
		return (
			<div>
				<input onChange={() => this.changeVal()} ref={this.myRef}></input>
				<br />
				<span>{this.state.val}</span>
			</div>
		)
	}
	changeVal = (e) => {
		this.setState({
			val: this.myRef.current.value
		}, () => {
			//console.info(this.state.val)
		})
	}
}

export default Input