import React from 'react'
export default class Btn extends React.Component {
	constructor() {
		super()
		this.state = {
			Num: 0,
			result: 0
		}
	}
	render() {
		return (
			<div>
				<button onClick={() => this.Addcount()}>点击</button>
				<br />
				<span>{this.state.result}</span>
			</div>
		)
	}
	Addcount = () => {
		this.setState({
			Num: this.state.Num + 1,
			result: this.state.Num
		}, () => {
			console.log(this.state.Num)
		})
	}
}