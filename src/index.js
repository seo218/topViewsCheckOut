import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReservationPage from './components/reservationPage.js';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        // bind
    }
    // functions

    render () {
        return (
            <div className="primary">
                {/* hello */}
                <ReservationPage/>
            </div>
        )
    }
}


ReactDOM.render(<App/ >, document.getElementById("app"))