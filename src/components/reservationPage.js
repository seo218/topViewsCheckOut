import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel } from 'react-bootstrap'

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
                <div> {console.log(this.getCarouselItems())} </div>
                <Carousel>
                    {this.getCarouselItems()}
                    {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src={products[0].image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
                </Carousel>
            </div>
        )
    }
}

export default ReservationPage