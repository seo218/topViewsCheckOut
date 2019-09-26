import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectProducts from './components/selectProducts.js'
import ReviewReservation from './components/reviewReservation.js'
import Checkout from './components/checkout.js'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageToRender: <SelectProducts togglePage={this.toggleSelectProduct} />,
            showSelectProducts: true,
            selectProducts: null,
            showReviewReservation: false,
            reviewReservation: null,
            showCheckout: false,
            checkout: null
        }
        this.setPages = this.setPages.bind(this)
        this.toggleSelectProduct = this.toggleSelectProduct.bind(this)
        this.toggleReviewReservation = this.toggleReviewReservation.bind(this)
        this.toggleCheckout = this.toggleCheckout.bind(this)
        
    }
    componentWillMount() {
        this.setPages()
    }

    setPages() {
        this.setState({
            selectProducts: <SelectProducts togglePage={this.toggleSelectProduct} />,
            reviewReservation: <ReviewReservation togglePage={this.toggleReviewReservation} />,
            checkout: <Checkout togglePage={this.toggleCheckout} />
        })
    }

    toggleSelectProduct() {
        // e.preventDefault()
        console.log('working')
        this.setState({
            showSelectProducts: false
        })
        // this.setState({
        //     showReviewReservation: !this.state.showReviewReservation
        // })
    }

    toggleReviewReservation() {
        this.setState({
            showReviewReservation: !this.state.showReviewReservation,
            showCheckout: !this.state.showCheckout
        })
    }

    toggleCheckout() {
        this.setState({
            showCheckout: !this.state.showCheckout
        })

    }

    render() {
        return (
            <div className="primary">
                {this.state.pageToRender}
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"))