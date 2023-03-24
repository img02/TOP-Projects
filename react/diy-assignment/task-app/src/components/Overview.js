import React, { Component } from "react";

export default class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.listItems.map((i) => (
                        <li>{i}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
