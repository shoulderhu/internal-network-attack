import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <FontAwesomeIcon icon={faNetworkWired} style={{color: "white"}}/>
                        <b>&nbsp;Internal Network Security</b>
                    </a>
                    <button class="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbar-collapse">
                        <span class="navbar-toggler-icon" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbar-collapse">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}