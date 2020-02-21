import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './js/Navbar'
import Jumbotron from "./js/Jumbotron";
import TabContent from "./js/TabContent"

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render((
    <div>
        <section>
            <Jumbotron />
        </section>
        <section>
            <TabContent />
        </section>
    </div>
), document.getElementById('main'));

