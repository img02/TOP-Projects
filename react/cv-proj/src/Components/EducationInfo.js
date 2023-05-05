import { Component } from "react";
import "../Assets/EducationInfo.css";
export default class EducationInfoComponent extends Component {
    render() {
        return (
            <div id="Educational-Experience-Main-Div">
                <p>Educational Experience</p>

                <p>put inputs here</p>

                <label>Institution: </label>
                <input
                    className="education-institution"
                    type={"text"}
                    defaultValue={this.props.Name}
                />

                <label>Title: </label>
                <input
                    className="education-title"
                    type={"text"}
                    defaultValue={this.props.Email}
                />

                <label>Date: </label>
                <input
                    className="education-date"
                    type={"date"}
                    defaultValue={this.props.Phone}
                />
            </div>
        );
    }
}
