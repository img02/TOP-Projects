import { Component } from "react";

export default class Resume extends Component {
    render() {
        return (
            <div className="resume-root">
                Resume:
                <p>{this.props.Name}</p>
                <p>{this.props.Email}</p>
                <p>{this.props.Phone}</p>
            </div>
        );
    }
}
