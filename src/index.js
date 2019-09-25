import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectReservation from './components/selectReservation.js'
import ReviewReservation from './components/reviewReservation.js'
import Checkout from './components/checkout.js'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToRender: <SelectReservation/>
        }
        // bind
    }
    // functions

    render () {
        return (
            <div className="primary">
                {this.state.pageToRender}
            </div>
        )
    }
}


ReactDOM.render(<App/ >, document.getElementById("app"))