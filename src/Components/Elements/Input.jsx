import React, { Component } from "react";
class Input extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    refShow() {
        console.log(this.inputRef.current.value+"Ref is called");
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
    // ? return( is must  !!!!!

}
export default Input;