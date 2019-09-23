import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, PopoverContent } from 'react-bootstrap'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
            currentItem: { name: "Select Product" },
            cartNumberOfItems: 0

        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
        this.getProductSelectionItems = this.getProductSelectionItems.bind(this)
        this.updateProductButton = this.updateProductButton.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    getCarouselItems() {
        let items = []
        for (let i = 0; i < products.length; i++) {
            items.push(

                <Carousel.Item key={i}>
                    <img
                        className="d-block w-100"
                        src={products[i].image}
                        alt="slide "
                    />
                    <Carousel.Caption>
                        <h3>{products[i].name}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
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
        let newCart = this.state.cartItems
        newCart.push(this.state.currentItem)
        this.setState({
            cartItems: newCart,
            cartNumberOfItems: this.state.cartItems.length
        })
    }

    render() {
        return (
            <div className="productSelectionPage">
                {/* testing line */}
                <div> {console.log(
                    "printing cart items", this.state.cartItems,
                    "printing current item", this.state.currentItem,
                    "printing number of cart items", this.state.cartNumberOfItems
                )} </div>

                <div className="carousel">
                    <Carousel>
                        {this.getCarouselItems()}
                    </Carousel>
                </div>

                <div className="cart">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Cart ( {this.state.cartNumberOfItems} Items )</Form.Label>
                        <br></br>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.currentItem.name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.getProductSelectionItems()}

                            </Dropdown.Menu>
                        </Dropdown>
                        <br></br>
                        <Button
                            onClick={() => {
                                this.addToCart();
                            }}
                        >
                            Add to Cart
                            </Button>
                    </Form.Group>
                </div>

            </div>
        )
    }
}

export default ReservationPage