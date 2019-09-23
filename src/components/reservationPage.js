import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, PopoverContent } from 'react-bootstrap'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
            currentItem: {name:"Select Product"},
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

                <Carousel.Item>
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
        let items =  []
        for (let i = 0; i < products.length; i++) {
            let productName = products[i].name
            items.push(
                <Dropdown.Item
                    href="#/action-1"
                    onClick={() => {
                        this.updateProductButton(products[i]);
                    }}
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
            cartItems: newCart
        })
        newCartNumberOfItmes = this.state.cartNumberOfItems ++
        this.setState({
            cartNumberOfItems: newCartNumberOfItmes
        })

    }

    render() {
        return (
            <div className="carousel">
                {/* testing line */}
                <div> {console.log(this.state.cartItems)} </div>

                <Carousel>
                    {this.getCarouselItems()}
                </Carousel>
                <div>
                    <Form.Row>
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
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        {/* <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                    </Form.Row>

                    {/* <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
  </Button> */}
                </div>
            </div>
        )
    }
}

export default ReservationPage