import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, Row } from 'react-bootstrap'
import ReservationReview from './reviewReservation.js'
import ReviewReservation from './reviewReservation.js'

class SelectProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            currentItem: { name: "Select Product" },
            numberOfItems: 0,
            quantity: undefined,
            selectProducts: null,

        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
        this.getProductSelectionItems = this.getProductSelectionItems.bind(this)
        this.updateProductButton = this.updateProductButton.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.handleQuantityChange = this.handleQuantityChange.bind(this)
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
        if (this.state.currentItem.name === "Select Product") {
            console.log('no product selected')
        } else {
            if (this.state.items === undefined) {
                let items = this.state.currentItem
                if (this.state.quantity === undefined) {
                    items.quantity = 1
                } else {
                    items.quantity = this.state.quantity
                }
                let newItemsArray = []
                newItemsArray.push(items)
                this.setState({
                    items: newItemsArray,
                    numberOfItems: items.quantity
                })
            } else {
                // bug is here 
                // quantity resets to state quantity 
                // if item in items array are the same as state current item
                let itemToAdd = this.state.currentItem
                if (this.state.quantity === undefined) {
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
                    numberOfItems: numberOfItems
                })

            }
        }
        // console.log(this.state.items, this.state.numberOfItems)
    }

    handleQuantityChange() {
        let quantity = event.target.value
        if (quantity > 0 && quantity % 1 === 0) {
            // console.log(this.state.quantity)
            this.setState({
                quantity: quantity
            })
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
                                <Form.Label>Cart ( {this.state.numberOfItems} Items )</Form.Label>
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
                                        >
                                        </input>
                                    </span>
                                </div>
                                <br></br>
                                <Button
                                    onClick={() => {
                                        this.addToCart();
                                    }}
                                >
                                    Add to Cart
                        </Button>
                                <br></br>
                                {/* <Button onCLick={() => { }}>
                                    View Cart
                                    </Button> */}
                            </Col>
                        </Row>
                    </Form>
                </div>
                <br></br>
                <div className="reservationReview">
                    <ReviewReservation cart={this.state.items} />
                </div>
            </div>
        )
    }
}

export default SelectProducts