import React from 'react'
import products from '../../database/bikerentals.js'
import { Carousel } from 'react-bootstrap'

class ReservationPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    
    }

    getCarouselItems() {
    //     let items = []
    //     for(let i = 0; i < products.length; i ++)  {
    //         items.push(
    //                 <Carousel.Item>
    //                         <img
    //                             className="d-block w-100"
    //                             src={products.image}
    //                             alt="slide " + {i}
    //                         />
    //                         <Carousel.Caption>
    //                             <h3>{product image}</h3>
    //                             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                         </Carousel.Caption>
    //                     </Carousel.Item>
    //         )
    //   }
    }

    render() {
        return (
            <div className="carousel">
                <div> {console.log(products[1])} </div>
               <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
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
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default ReservationPage