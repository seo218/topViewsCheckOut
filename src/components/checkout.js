import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Carousel, Form, Col, Button, Dropdown, Row, FormLabel, Figure, ListGroup, InputGroup, FormControl, ToggleButtonGroup } from 'react-bootstrap'
import Promise from 'bluebird'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="checkOut">
        Billing Info
        <br></br>
        <br></br>
          <InputGroup>
            <FormControl
              placeholder="Full Name"
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

      </div>
    )
  }
}

export default Checkout