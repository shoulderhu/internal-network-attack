import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

import Card from './Card'


export default class TabContent extends React.Component {
    render() {
        return (
            <div className="tab-content">
                <TabOffense />
                <TabDefense />
            </div>
        );
    }
}

class TabOffense extends React.Component {
    render() {
        return (
            <div className="tab-pane fade show active in" id="offense">
                <div class="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Card/>
                        </div>
                        <div className="col-md-4">
                            <Card/>
                        </div>
                        <div className="col-md-4">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class TabDefense extends React.Component {
    render() {
        return (
            <div className="tab-pane fade" id="defense">
                <div class="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Card/>
                        </div>
                        <div className="col-md-4">
                            <Card/>
                        </div>
                        <div className="col-md-4">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}