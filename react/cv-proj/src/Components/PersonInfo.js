import { Component } from "react";
import "../Assets/PersonInfo.css";

export default class PersonInfoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="person-root">
                <p className="person-text">This is the person info component</p>
            </div>
        );
    }
}
