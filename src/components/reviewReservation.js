import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Table, Popover, OverlayTrigger } from 'react-bootstrap'
import Promise from 'bluebird'
import { PassThrough } from 'stream'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'

class ReviewReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.renderCart = this.renderCart.bind(this)
    this.removeItemfromCart = this.removeItemfromCart.bind(this)
    // this.updateTotal = this.updateTotal.bind(this)
    // this.sortCart = this.sortCart.bind(this)
  }

  renderCart() {
    if(this.props.cart === undefined) {
      return (
        <div className="emptyCart">
          needs to be centered
        </div>
      )
    } else {
      const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">click to remove from cart</Popover.Title>
        </Popover>
      );
      
      let cart = this.props.cart
      // console.log(cart)
      let cartArray = []
      for(let i = 0; i < cart.length; i ++) {
        cartArray.push(
          <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
          <tr>
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

  removeItemfromCart(itemIndx) {
    if(this.props.cart === undefined) {
      console.log('cart is empty')
    } else {
      let cart = this.car
    }
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
  }

  sortCart () {
  //   let sortedCart = []
  //   let cart = this.props.cart
  //   for (let i = 0; i < cart.length; i++) {
  //     // console.log('printing inside loop 1', cart[i].name, cartToRender)
  //     if (sortedCart.length === 0) {
  //       cart[0].totaled = false
  //       sortedCart.push(cart[0])
  //     } else {
  //       if (!sortedCart.includes(cart[i])) {
  //         cart[i].totaled = false
  //         sortedCart.push(cart[i])
  //       }
  //     }
  // }
  // // console.log(sortedCart)
  // return sortedCart
}

updateTotal() {
  if(this.props.cart === undefined) {
    console.log('cart is empty')
  } else {
    total = 0
    cart = this.props.cart
    for(let i = 0; i < cart.length; i ++) {
      total += (cart[i].price * cart[i].quantity)
    }
    // this.setState({
    //   total: total
    // })
    console.log('printing total', total)
  }
}

  render() {
    return (
      <div className="reviewReservation">
        <h1>
          Cart
            </h1>
        <br></br>
        {/* <Button onClick={() => { }}>
          refresh cart
            </Button> */}
        {/* <br></br>
        <br></br>
        <br></br> */}
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
      </div>
    )
  }
}

export default ReviewReservation