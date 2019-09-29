import React from 'react'
import { Table, Popover, OverlayTrigger, Modal, Button } from 'react-bootstrap'


class ReviewReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.renderCart = this.renderCart.bind(this)
  }

  renderCart() {
    if (this.props.cart === undefined) {
      return (
        <div className="emptyCart">
         
        </div>
      )
    } else {
      const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">click to remove from cart</Popover.Title>
        </Popover>
      );

      let cart = this.props.cart
      let cartArray = []
      for (let i = 0; i < cart.length; i++) {
        cartArray.push(
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
            <tr onClick={() => { this.props.removeFromCart(cart[i].cartId) }}>
              <td>{cart[i].name}</td>
              <td>${cart[i].price.toFixed(2)}</td>
              <td>{cart[i].quantity}</td>
              <td>{cart[i].product_type}</td>
            </tr>

          </OverlayTrigger>
        )
      }
      return cartArray
    }
  }



  render() {
    return (
      <div className="cartSummary">
      
          <Modal.Header closeButton>
            <Modal.Title>Cart Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table variant="dark" >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Product type</th>
                </tr>
              </thead>
              <tbody>
                {this.renderCart()}
                <tr>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                  <th>{this.props.total}</th>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => {this.props.toggleSummary()}}>Back to product selection</Button>
            <Button variant="primary"  onClick={() => {this.props.toggleCheckout() }} >Proceed to Checkout</Button>
          </Modal.Footer>
      
      </div >

    )
  }
}

export default ReviewReservation