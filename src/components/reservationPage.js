import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form } from 'react-bootstrap'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.getCarouselItems = this.getCarouselItems.bind(this)
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

    render() {
        return (
            <div className="carousel">
                {/* testing line */}

                <div> {console.log(this.getCarouselItems())} </div>
                <Carousel>
                    {this.getCarouselItems()}
                </Carousel>
            </div>
        )
    }
}

export default ReservationPage