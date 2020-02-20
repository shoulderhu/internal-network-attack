import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
                <a class="navbar-brand" href="/">
                    <FontAwesomeIcon icon={faNetworkWired} style={{color: "white"}} />
                    <b>&nbsp;Internal Network Attack</b>
                </a>
                <button class="navbar-toggler" type="button"
                        data-toggle="collapse" data-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon" />
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home</a>
                    </div>
                </div>
            </nav>
        );
    }
}