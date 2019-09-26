import React from 'react'
import { products } from '../../database/bikerentals.js'
import { Table, Tab, Button, Row, Col } from 'react-bootstrap'
import Promise from 'bluebird'

class ReviewReservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.getCartDisplayItems = this.getCartDisplayItems.bind(this)
    this.removeItemfromCart = this.removeItemfromCart.bind(this)
    this.renderCart = this.renderCart.bind(this)

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

  renderCart() {
    let cartToRender = []
    let cart = this.props.cart
    console.log('pringting cart in rendercart', cart)
    if (cart === undefined || cart.length === 0) {
      return (
        <div>
          cart is empty
        </div>
      )
    } else {
      // loop through cart
      for (let i = 0; i < cart.length; i++) {
        // console.log('printing inside loop 1', cart[i].name, cartToRender)
        if (cartToRender.length === 0) {
          cartToRender.push(cart[0])
        } else {
          if (!cartToRender.includes(cart[i])) {
            cartToRender.push(cart[i])
          }
        }
      }
      for (let i = 0; i < cartToRender.length; i++) {
        cart[i].totaled = false
      }
      // start here - totals first item but wont total following items
      for (let i = 0; i < cart.length; i++) {
        let totalQuantity = cart[i].quantity
        for (let j = i + 1; j < cart.length; j++) {
          if (cart[i].name === cart[j].name) {
            totalQuantity += cart[j].quantity
          }
        }
        for (let j = 0; j < cartToRender.length; j++) {
          if (cartToRender[j].name === cart[i].name && cart[j].totaled === false) {
            cartToRender[j].quantity = totalQuantity
            cartToRender[j].totaled = true
          }
        }

      }
    }
    console.log('printing cart to render', cartToRender)
  }

  render() {
    return (
      <div className="reviewReservation">
        <h1>
          Cart
            </h1>
        <br></br>
        <Button onClick={() => { this.renderCart() }}>
          refresh cart
            </Button>
        <br></br>
        <br></br>
        <br></br>
        <Table variant="dark" >
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product type</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ReviewReservation