import { Component } from "react";
import "../Assets/EducationInfo.css";
export default class EducationInfoComponent extends Component {
    render() {
        return (
            <div id="educational-experience-main-div">
                <p className="education-title-p">Educational Experience</p>

                <p>put inputs here</p>

                <label>Institution: </label>
                <input
                    className="education-institution"
                    type={"text"}
                    //defaultValue={this.props.Education[0].Institution}
                />

                <label>Title: </label>
                <input
                    className="education-title"
                    type={"text"}
                    //defaultValue={this.props.Education[0].Title}
                />

                <label>Date: </label>
                <input
                    className="education-date"
                    type={"date"}
                    //defaultValue={this.props.Education[0].Date}
                />
                <button onClick={this.props.updateBtnClicked}>Add</button>
            </div>
        );
    }
}
