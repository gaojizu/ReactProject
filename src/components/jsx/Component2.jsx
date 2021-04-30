import React from 'react'
class Com2 extends React.Component {
    constructor(props) {
        super()
        console.log(props);
        this.state = {
            infos: {}
        }
    }
    render() {
        return (
            <div>
                <span>
                    {this.props.name} - {this.props.age} - {this.props.address}
                </span>
                <ul>
                    {this.props.list.map(item => <li key={item.id}>{item.kl}</li>)}
                </ul>
            </div>
        )
    }
}
export default Com2