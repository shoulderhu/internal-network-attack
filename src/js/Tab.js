import React from "react";

export default class Tab extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills justify-content-center btn-lg">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#offense">Offense</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#defense">Defense</a>
                    </li>
                </ul>
            </div>
        );
    }
}