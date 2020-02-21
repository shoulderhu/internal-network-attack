import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top"
                     src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                     alt="" />
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <hr/>
                    <p className="card-text">Some quick example text to build on the card title and make up the
                        bulk of the card's
                        content.</p>
                    <a href="/" className="black-text d-flex justify-content-end">
                        <h5>Read more <FontAwesomeIcon icon={faAngleDoubleRight} /></h5>
                    </a>
                </div>
            </div>
        );
    }
}



