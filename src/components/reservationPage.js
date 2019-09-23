import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, Row, FormLabel, Figure } from 'react-bootstrap'
import { resolve } from 'path'
import { rejects } from 'assert'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartItems: [{ name: "" }],
            currentItem: { name: "Select Product" },
            cartNumberOfItems: 0,
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
        // let newCart = this.state.cartItems
        // newCart.push(this.state.currentItem)
        // let stateUpdate = new Promise((resolve, reject) => {
        //     resolve(
        //         this.setState({
        //             cartItems: newCart,
        //             cartNumberOfItems: this.state.cartItems.length,
        //             cartDisplay: this.getCartDisplayItems()
        //         })
        //     )
        // })
        // stateUpdate()
        // .then(()=>{
        //     console.log('working')
        // })
        // .catch(()=>{
        //     console.log('notworking')
        // })

    }

    getCartDisplayItems() {
        let items = []
        // console.log('printing state cart items', this.state.cartItems[1].name)
        for (let i = 0; i < this.state.cartItems; i++) {
            items.push(
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="holder.js/171x180"
                    />
                <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                 </Figure.Caption>
                </Figure>
            )
          
                
        }
        // console.log("printing itmes in getDisplay item", items)
        return items
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
                                <FormLabel>Current Items</FormLabel>
                                {this.getCartDisplayItems()}
                                {[]}
                            </Col>
                        </Row>
                    </Form>
                </div>

            </div>
        )
    }
}

export default ReservationPage