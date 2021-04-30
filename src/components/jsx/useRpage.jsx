import React from "react"
import Rpage from "../../components/common/Rpage/ComPage.jsx"
class UseRpage extends React.Component {
    constructor() {
        super()
        this.state = {
            total: 100,
            pageSize: 20,
        }
    }
    _currPageNo = (page, pageSize) => {
        console.log(page, pageSize);
    }
    _currPageSize = (page, pageSize) => {
        console.log(page, pageSize);
    }
    render() {
        return (
            <Rpage
                _currPageNo={this._currPageNo}
                _currPageSize={this._currPageSize}
            ></Rpage>
        )
    }
}
export default UseRpage