import { Component } from "react";

export default class Resume extends Component {
    render() {
        return <div className="resume-root">Resume: {this.props.Name}</div>;
    }
}
