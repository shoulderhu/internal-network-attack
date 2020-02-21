import React from "react";
import Tab from './Tab'

export default class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>Internal Network Security</h1>
                <p className="lead">Examples of internal network attacks and how to protect against these attacks</p>
                <Tab />
            </div>
        );
    }
}