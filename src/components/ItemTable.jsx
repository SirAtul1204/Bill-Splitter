import React, { Component } from "react";

class ItemTable extends Component {
  total = 0;
  newItemList = (itemCounter, items) => {
    let newItems = [];
    for (let i = 0; i < itemCounter; i++) {
      newItems[i] = items[i];
    }
    return newItems;
  };

  getRows = () => {
    let itemCounter = this.props.itemCounter;
    let items = this.props.items;
    let newItems = this.newItemList(itemCounter, items);
    this.handleTotal(itemCounter, newItems);

    return newItems.map((item) => {
      return (
        <tr className="bg-danger">
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
        </tr>
      );
    });
  };

  handleTotal = (itemCounter, newItems) => {
    let sum = 0;
    for (let i = 0; i < itemCounter; i++) {
      sum += newItems[i].price * newItems[i].quantity;
    }
    this.total = sum;
  };

  render() {
    return (
      <div className="myTable">
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.getRows()}
            <tr>
              <td colSpan="2">Total</td>
              <td>{this.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemTable;
