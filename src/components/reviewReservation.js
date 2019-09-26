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
    this.getCartDisplayItems = this.getCartDisplayItems.bind(this)
    this.removeItemfromCart = this.removeItemfromCart.bind(this)
    this.renderCart = this.renderCart.bind(this)
    this.updateTotal = this.updateTotal.bind(this)
    // this.sortCart = this.sortCart.bind(this)
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
  }

  getCartDisplayItems() {
    // if (this.state.currentItem.name === "Select Product") {
    //     return ""
    // } else {
    // console.log(this.state.items)
    // let items = []
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
    // }
    // }

    stateUpdate()
    //     .then(() => {
    //         this.getCartDisplayItems()
    //     })
    //     .catch(() => {
    //         console.log('remove item from cart not working')
    //     })
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