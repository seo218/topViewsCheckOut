//import React from 'react';
import ReactDOM from 'react-dom'



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
            <div>
                hello world - this is a new line of code
            </div>
        )
    }
}


ReactDOM.render(<App/ >, document.getElementById("app"))