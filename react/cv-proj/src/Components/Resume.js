import { Component } from "react";
import "../Assets/Resume.css";

export default class Resume extends Component {
    render() {
        const { Name, Email, Phone, Education } = this.props;
        return (
            <div className="resume-main-div">
                <p className="resume-title">Resume:</p>
                <p>{Name}</p>
                <p>{Email}</p>
                <p>{Phone}</p>
                <p></p>
                <p>Education</p>
                <div>
                    <ul>
                        {Education.map((edu) => (
                            <li>
                                {edu.Institution} - {edu.Title} - {edu.Date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
