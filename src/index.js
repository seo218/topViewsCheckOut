import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectProducts from './components/selectProducts.js'



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageToRender: <SelectProducts togglePage={this.toggleSelectProductPage} />,
            showProductSelction: false,
            showCheckout: false,
            showOrderComplete: false
        }
        // this.toggleSelectProductPage = this.toggleSelectProductPage.bind(this)
    }


    toggleSelectProductPage() {
        console.log('toggling product selection page')
       this.setState({
           pageToRender: <Checkout/>
       })
    }


    render() {
        return (
            <div className="primary">
                <SelectProducts />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))