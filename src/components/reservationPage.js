import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, Row, FormLabel, Figure, ListGroup } from 'react-bootstrap'
import Promise from 'bluebird'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [],
            currentItem: { name: "Select Product" },
            cartNumberOfItems: 0,
            cartDisplay: []
        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
        this.getProductSelectionItems = this.getProductSelectionItems.bind(this)
        this.updateProductButton = this.updateProductButton.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.getCartDisplayItems = this.getCartDisplayItems.bind(this)
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
        let stateUpdate = () => {
            return new Promise((resolve, reject) => {
                resolve(
                    this.setState({
                        cartItems: newCart,
                        cartNumberOfItems: this.state.cartItems.length,
                    })
                )

            })
        }
        stateUpdate()
            .then(() => {
                // console.log("printing cart items state", this.state.cartItems)
                this.getCarouselItems()
                // this.setState({
                //     cartDisplay: this.getCartDisplayItems()
                // })
            })
            .catch(() => {
                console.log('notworking')
            })

    }

    getCartDisplayItems() {
        let items = []
        // console.log('printing state cart items', this.state.cartItems[1].name)
        for (let i = 0; i < this.state.cartItems.length; i++) {
            items.push(
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={this.state.cartItems[i].image}
                />
            )
            items.push(
                <Figure.Caption>
                    ${this.state.cartItems[i].price.toFixed(2)} {this.state.cartItems[i].name}
                </Figure.Caption>
            )
            items.push(<br></br>)
        }
        console.log("printing item array in getCartDisplay  items", items)
        return items
    }


    render() {
        return (
            <div className="productSelectionPage">
                {/* testing line */}

                {/* <div> {console.log(
                    "printing cart items", this.state.cartItems,
                    "printing current item", this.state.currentItem,
                    "printing number of cart items", this.state.cartNumberOfItems
                )} </div> */}

                <div className="carousel">
                    <Carousel>
                        {this.getCarouselItems()}
                    </Carousel>
                </div>

                <div className="cart">
                    <Form>
                        <Row>
                            <Col className="addToCart">
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
                            </Col>
                            <Col className="cartDisplay">
                                <div>Current Items</div>
                                <br></br>
                                <Figure>
                                    {this.getCartDisplayItems()}
                                </Figure>
                            </Col>
                        </Row>
                    </Form>
                </div>

            </div>
        )
    }
}

export default ReservationPage