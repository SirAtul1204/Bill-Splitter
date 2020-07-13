import React, { Component } from "react";

class ItemAdder extends Component {
  state = {
    name: "",
    price: "",
    quantity: "",
  };

  addItem = () => {
    // console.log(this.state);
    this.props.sendName(this.state.name, this.state.price, this.state.quantity);
    let name = "";
    let price = "";
    let quantity = "";
    this.setState({ name: name, price: price, quantity: quantity });
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };

  changePrice = (event) => {
    this.setState({ price: parseInt(event.target.value) });
  };

  changeQuantity = (event) => {
    this.setState({ quantity: parseInt(event.target.value) });
  };

  render() {
    // console.log(this.state.name);
    return (
      <div className="itemDiv">
        <h3>Add Items</h3>
        <form>
          <div>
            <label className="badge badge-dark myLabel">
              Name:
              <input
                className="myInputField"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeName}
              />
            </label>
          </div>
          <div>
            <label className="badge badge-dark myLabel">
              Price:
              <input
                className="myInputField"
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.changePrice}
              />
            </label>
          </div>
          <div>
            <label className="badge badge-dark myLabel">
              Quantity:
              <input
                className="myInputField quantity"
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={this.changeQuantity}
              />
            </label>
          </div>
          <div id="rightAligned">
            <button
              type="button"
              className="mybtn btn btn-primary"
              onClick={this.addItem}
            >
              Add More
            </button>
            <button
              className="mybtn btn btn-danger"
              type="button"
              onClick={this.props.done}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ItemAdder;
