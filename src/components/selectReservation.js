import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, Row, FormLabel, Figure, ListGroup, InputGroup, FormControl, ToggleButtonGroup } from 'react-bootstrap'
import Promise from 'bluebird'
import { rejects } from 'assert'
import { networkInterfaces } from 'os'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            currentItem: { name: "Select Product" },
            numberOfItems: 0,
            quantity: undefined
        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
        this.getProductSelectionItems = this.getProductSelectionItems.bind(this)
        this.updateProductButton = this.updateProductButton.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.getCartDisplayItems = this.getCartDisplayItems.bind(this)
        this.removeItemfromCart = this.removeItemfromCart.bind(this)
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
                let newCart = this.state.currentItem
                if (this.state.quantity === undefined) {
                    newCart.quantity = 1
                } else {
                    newCart.quantity = this.state.quantity
                }
                let newCartArray = []
                newCartArray.push(newCart)
                this.setState({
                    items: newCartArray
                })
            } else {
                let itemToAddToCart = this.state.currentItem
                if (this.state.quantity === undefined) {
                    itemToAddToCart.quantity = 1
                } else {
                    itemToAddToCart.quantity = this.state.quantity
                }
                let newCart = this.state.items
                newCart.push(itemToAddToCart)
                this.setState({
                    items: newCart
                })

            }
        }
        console.log(this.state.items)
    }

    removeItemfromCart(itemIndx) {
        let newCart = this.state.items
        newCart.splice(itemIndx, 1)
        // console.log('printing new cart', newCart)
        let stateUpdate = () => {
            return new Promise((resolve, reject) => {
                resolve(
                    this.setState({
                        items: newCart,
                        numberOfItems: this.state.items.length
                    })
                )
            })
        }
        stateUpdate()
        //     .then(() => {
        //         this.getCartDisplayItems()
        //     })
        //     .catch(() => {
        //         console.log('remove item from cart not working')
        //     })
    }

    getCartDisplayItems() {
        if (this.state.currentItem.name === "Select Product") {
            return ""
        } else {
            // console.log(this.state.items)
            let items = []
            // console.log(this.state.items.length)

            // for (let i = 0; i < this.state.items.length; i++) {
            //     console.log(this.state.items.length)
            //     for (let j = 0; j < this.setState.items[i].quantity; j++) {
            //         items.push(
            //             <Figure.Image
            //                 width={171}
            //                 height={180}
            //                 alt="171x180"
            //                 src={this.state.items[i].image}
            //             />
            //         )
            //         items.push(
            //             <Figure.Caption>
            //                 ${this.state.items[i].price.toFixed(2)} {this.state.items[i].name}
            //             </Figure.Caption>
            //         )
            //         items.push(<br></br>)
            //         items.push(
            //             <Button
            //                 key={i}
            //                 variant="danger"
            //                 onClick={() => {
            //                     this.removeItemfromCart(i)
            //                 }}
            //             >
            //                 remove
            //                       </Button>
            //         )
            //         items.push(<br></br>)
            //         items.push(<br></br>)
            //         items.push(<br></br>)
            //     }
            // }
            // console.log(items)
            // return items
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


    render() {
        return (
            <div className="productSelectionPage">
                {/* testing line */}

                {/* <div> {console.log(
                    "printing cart items", this.state.items,
                    "printing current item", this.state.currentItem,
                    "printing number of cart items", this.state.numberOfItems
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
                                <div className="numberOfItemsInput">
                                    <InputGroup>

                                        <FormControl
                                            placeholder="number of items"
                                            width="5"
                                            onChange={this.handleQuantityChange}
                                        >
                                        </FormControl>
                                    </InputGroup>

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
                                <br></br>
                                <Button>
                                    Checkout
                                    </Button>
                            </Col>
                            <Col className="cartDisplay">
                                <div>Current Items</div>
                                <br></br>
                                <Figure>
                                    {/* {this.getCartDisplayItems()} */}
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