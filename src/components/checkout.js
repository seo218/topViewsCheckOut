import React from 'react'
import { InputGroup, Form, Modal, Button, Col, Row } from 'react-bootstrap'

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isValid: false
    }
    this.validate = this.validate.bind(this)
  }

  validate(event) {
    isValid = event.currentTarget
    if (isValid === false) {
      event.prevent.Defualt()
      event.stopPropagation()
    } else {
      this.props.toggleOrderComplete()
    }
  }

  render() {
    return (
      <div >
        <div className="checkOut">
          <br></br>
          <Form>
            <Form.Group>
              <Form.Label>
                <h3> Billing info</h3>
              </Form.Label>
              <br></br>
              <Form.Label>
                Name 
              </Form.Label>
              <Form.Control placeholder="as appears on card" />
            </Form.Group>
           
            <Form.Group>
              <Form.Label>
                Street address 1
              </Form.Label>
              <Form.Control placeholder="street address" />
            </Form.Group>
         
            <Form.Row>
            <Form.Group as={Col} md="7">
              <Form.Label>
                Street address 2
              </Form.Label>
              <Form.Control placeholder="apt, suite, etc" />
            </Form.Group>

            <Form.Group as={Col} md="2">
            <Form.Label>
              State
              </Form.Label>
            <Form.Control placeholder="state" />
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>
                Zip
              </Form.Label>
              <Form.Control placeholder="zip code" />
            </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="9">
              <Form.Label>
                Credit card number
              </Form.Label>
              <Form.Control placeholder="credit card number" />

            </Form.Group><Form.Group as={Col} md="3">
              <Form.Label>
                CVC
              </Form.Label>
              <Form.Control placeholder="cvc" />
            </Form.Group>
            </Form.Row>

          </Form>
          <br></br>

        </div>
        <br></br>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => { this.props.toggleCheckout() }}
          >
            Review Order
          </Button>
          <Button
            onClick={() => { this.props.toggleOrderComplete() }}
          >
            Complete purchase
          </Button>

        </Modal.Footer>

      </div>
    )
  }
}

export default Checkout