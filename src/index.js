import React from 'react'
import ReactDOM from 'react-dom'
import { products } from '../database/bikerentals.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Form, Col, Button, Dropdown, Row, Modal } from 'react-bootstrap'
import ReviewReservation from './components/reviewReservation.js'
import Checkout from './components/checkout.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            currentItem: { name: "Select Product" },
            numberOfItemsTotal: 0,
            quantity: undefined,
            selectProducts: null,
            totalPrice: `$${0}`,
            cartId: 0,
            showCart: false,
            showCheckout: false,
            showSelectProductAlert: false,
            showCheckoutAlert: false,
            showOrderComplete: false

        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
        this.getProductSelectionItems = this.getProductSelectionItems.bind(this)
        this.updateProductButton = this.updateProductButton.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleQuantityChange = this.handleQuantityChange.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
        this.toggleCartSummary = this.toggleCartSummary.bind(this)
        this.toggleCheckout = this.toggleCheckout.bind(this)
        this.renderAlert = this.renderAlert.bind(this)
        this.toggleCheckoutAlert = this.toggleCheckoutAlert.bind(this)
        this.toggleOrderComplete = this.toggleOrderComplete.bind(this)
        this.enterPressed = this.enterPressed.bind(this)
    }


    getCarouselItems() {
        let items = []
        for (let i = 0; i < products.length; i++) {
            items.push(
                <Carousel.Item key={i}>
                    <img
                        src={products[i].image}
                        alt="slide "
                    />
                    <br></br>
                    <br></br>                    
                    <br></br>
                    <br></br>                    
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                    <Carousel.Caption>
                        <h4>{products[i].name}</h4>
                        <p>${products[i].price.toFixed(2)}</p>
                    </Carousel.Caption>
                    </div>
                </Carousel.Item>

            )
        }
        return items
    }

    getProductSelectionItems() {
        let items = []
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].name
            items.push(
                <Dropdown.Item
                    href="#/action-1"
                    onClick={() => {
                        this.updateProductButton(products[i]);
                    }}
                    key={i}
                >
                    {productName}
                </Dropdown.Item>
            )
        }
        return items
    }

    updateProductButton(product) {
        this.setState({
            currentItem: product
        })
    }

    addToCart() {
        if (this.state.currentItem.name === "Select Product") {
            this.setState({
                showSelectProductAlert: !this.state.showSelectProductAlert
            })
        } else {
            let itemToAdd = JSON.parse(JSON.stringify(this.state.currentItem))
            itemToAdd.cartId = this.state.cartId
            let newCartId = this.state.cartId
            newCartId++
            this.setState({
                cartId: newCartId
            })
            if (this.state.items === undefined) {
                if (this.state.quantity === undefined  ) {
                    itemToAdd.quantity = 1
                } else {
                    itemToAdd.quantity = this.state.quantity
                }
                let itemArray = []
                itemArray.push(itemToAdd)
                this.setState({
                    items: itemArray,
                    numberOfItemsTotal: itemToAdd.quantity,
                    totalPrice: this.updateTotal()
                })
            } else {
                if (this.state.quantity === undefined  ) {
                    itemToAdd.quantity = 1
                } else {
                    itemToAdd.quantity = this.state.quantity
                }
                let newItems = this.state.items
                newItems.push(itemToAdd)
                let numberOfItems = 0
                for (let i = 0; i < newItems.length; i++) {
                    numberOfItems += parseInt(newItems[i].quantity)
                }
                this.setState({
                    items: newItems,
                    numberOfItemsTotal: numberOfItems,
                    totalPrice: this.updateTotal()
                })

            }
        }
    }

    handleQuantityChange() {
        let quantity = event.target.value
        if (quantity > 0 && quantity % 1 === 0) {
            this.setState({
                quantity: quantity
            })
        }
    }

    updateTotal() {
        if (this.state.items === undefined || this.state.items.length === 0) {
            console.log()
        } else {
            let total = 0
            let cart = this.state.items
            for (let i = 0; i < cart.length; i++) {
                total += (cart[i].price * cart[i].quantity)
            }
            return `$${total.toFixed(2)}`
        }
    }

    removeItemFromCart(cartId) {
        let newCart = this.state.items
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].cartId === cartId) {
                newCart.splice(i, 1)
            }
        }
        let numberOfItems = 0
        for (let i = 0; i < newCart.length; i++) {
            numberOfItems += parseInt(newCart[i].quantity)
        }
        this.setState({
            items: newCart,
            totalPrice: this.updateTotal(),
            numberOfItemsTotal: numberOfItems
        })
    }

    toggleCartSummary() {
        this.setState({
            showCart: !this.state.showCart
        })
    }

    renderAlert(title, message) {
        return (
            <div>
                <Modal.Header closeButton>
                    <h3>{title}</h3>
                </Modal.Header>
                <Modal.Body>
                {message}
                </Modal.Body>
            </div>
        )
    }

    toggleCheckoutAlert() {
        this.setState({
            showCheckoutAlert: !this.state.showCheckoutAlert,
            showCart: !this.state.showCart
        })
    }

    toggleCheckout() {
        let hasBike = false

        let cart = this.state.items
        if (cart === undefined) {
            this.toggleCheckoutAlert()

        } else {
            for (let i = 0; i < cart.length; i++) {
                if (this.state.items[i].product_type === "bike") {
                    hasBike = true
                }
            }
            if (hasBike) {
                this.setState({
                    showCart: !this.state.showCart,
                    showCheckout: !this.state.showCheckout,
                    totalPrice: this.updateTotal()
                })

            } else {
                this.toggleCheckoutAlert()
            }
        }
    }
    
    toggleOrderComplete() {
        this.setState({
            showOrderComplete: !this.state.showOrderComplete,
            showCheckout: !this.state.showCheckout
        })
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            this.addToCart()
        } 
    }

    render() {
        return (
            <div className="productSelectionPage">
                <div className="carousel">
                    <Carousel>
                        {this.getCarouselItems()}
                    </Carousel>
                </div>
                <div>
                    <Form>
                        <Row>
                            <Col className="addToCart">
                                <Form.Label>Cart ( {this.state.numberOfItemsTotal} Items )</Form.Label>
                                <br></br>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                        {this.state.currentItem.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.getProductSelectionItems()}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <br></br>
                                <div>
                                    <span>
                                        <input
                                            placeholder="number of items"
                                            className="round"
                                            onChange={this.handleQuantityChange}
                                            onKeyPress={this.enterPressed}
                                        >
                                        </input>
                                    </span>
                                </div>
                                <br></br>
                                <Button
                                    onClick={() => {this.addToCart()}}
                                >
                                    Add to Cart
                        </Button>
                                <br></br><br></br>
                                <Button onClick={() => { this.toggleCartSummary() }}>
                                    View Cart
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                    <div className="reservationReview">
                        <Modal show={this.state.showCart} onHide={this.toggleCartSummary} centered>
                            <ReviewReservation
                                cart={this.state.items}
                                total={this.state.totalPrice}
                                removeFromCart={this.removeItemFromCart}
                                toggleSummary={this.toggleCartSummary}
                                toggleCheckout={this.toggleCheckout}
                                
                            />
                        </Modal>
                    </div>
                    <div className="checkOut">
                        <Modal show={this.state.showCheckout} centered >
                            <Checkout 
                                toggleCheckout={this.toggleCheckout}
                                toggleOrderComplete={this.toggleOrderComplete}
                             />
                        </Modal>
                    </div>
                    <div className="checkOutAlert">
                        <Modal 
                            show={this.state.showCheckoutAlert}  
                            onHide={this.toggleCheckoutAlert}
                            centered
                        >
                            {this.renderAlert('Alert','You must select at least one bike')}
                        </Modal>
                    </div>
                    <div className="orderComplete">
                        <Modal 
                            show={this.state.showOrderComplete} 
                            onHide={() => {
                                this.setState({
                                    showOrderComplete: !this.state.showOrderComplete
                                })
                            }}
                            centered
                        >
                            {this.renderAlert('Congratulations', 'Your order is complete!')}
                        </Modal>
                    </div>
                    <div className="orderCompletAlert">
                        <Modal 
                            show={this.state.showSelectProductAlert} 
                            onHide={() => {
                                this.setState({
                                    showSelectProductAlert: !this.state.showSelectProductAlert
                                })
                            }}
                            centered
                        >
                            {this.renderAlert('Alert', 'Please select a product')}
                        </Modal>
                    </div>
                </div>


            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))