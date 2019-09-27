import React from 'react'
import { products } from '../../database/bikerentals.js'
import { InputGroup, FormControl, Modal, Button, Col, Row } from 'react-bootstrap'
import Promise from 'bluebird'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div >
       
          <div className="checkOut">

            Billing Info
        <br></br>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="Name on card"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="Card Number"
              />
            </InputGroup>
            
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="Street Address"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="City"
              />
            </InputGroup>
            <br></br>

            <InputGroup>
              <FormControl
                placeholder="State"
              />
            </InputGroup>
            <br></br>

            <InputGroup>
              <FormControl
                placeholder="Zip"
              />
            </InputGroup>
            <br></br>
            <InputGroup>
              <FormControl
                placeholder="cvc"
              />
            </InputGroup>
          </div>
          <br></br>
          <Modal.Footer>
          <Button 
              variant="secondary"
              onClick={() => {this.props.toggleCheckout()}}
            >
                  Review Order
          </Button>  
          <Button 
            onClick={() => {this.props.toggleOrderComplete()}}
          >
                  Complete purchase
          </Button>
          </Modal.Footer>
  
      </div>
    )
  }
}

export default Checkout