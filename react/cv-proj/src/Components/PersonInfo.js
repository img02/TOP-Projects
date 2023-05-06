import { Component } from "react";
import "../Assets/PersonInfo.css";

export default class PersonInfoComponent extends Component {
    render() {
        return (
            <div className="person-root">
                <p className="person-text">Personal Information</p>

                <label>Name: </label>
                <input
                    className="person-name"
                    type={"text"}
                    defaultValue={this.props.Name}
                />

                <label>Email: </label>
                <input
                    className="person-email"
                    type={"email"}
                    defaultValue={this.props.Email}
                />

                <label>Phone: </label>
                <input
                    className="person-phone"
                    type={"text"}
                    defaultValue={this.props.Phone}
                />

                <button onClick={this.props.updateBtnClicked}>Update</button>
            </div>
        );
    }
}
