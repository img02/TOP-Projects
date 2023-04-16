import { Component } from "react";
import "../Assets/PersonInfo.css";

export default class PersonInfoComponent extends Component {
    render() {
        return (
            <div className="person-root">
                <p className="person-text">This is the person info component</p>
                <p>{this.props.Name}</p>
                <label>Name: </label>
                <input className="person-name" type={"text"} />
                <button onClick={this.props.updateBtnClicked}>Update</button>
            </div>
        );
    }
}
