import React, { Component } from "react";

class FinalBill extends Component {
  constructor(props) {
    super(props);
    this.itemCounter = this.props.itemCounter;
    this.items = this.props.items;
    this.friends = this.props.friends;
    this.friendCounter = this.props.friendCounter;

    this.newItems = this.getNewItems(this.itemCounter, this.items);

    this.newFriends = this.getNewFriends(this.friendCounter, this.friends);

    for (let i = 0; i < this.newItems.length; i++) {
      for (let j = 0; j < this.newFriends.length; j++) {
        for (let k = 0; k < this.newFriends[j].itemsTaken.length; k++) {
          if (this.newItems[i].name === this.newFriends[j].itemsTaken[k]) {
            this.newItems[i].eatenBy.push(this.newFriends[j].friendName);
          }
        }
      }
    }
  }

  getNewItems = (itemCounter, items) => {
    let newItems = [];
    for (let i = 0; i < itemCounter; i++) {
      newItems[i] = items[i];
    }

    return newItems;
  };

  getNewFriends = (friendCounter, friends) => {
    let newFriends = [];
    for (let i = 0; i < friendCounter; i++) {
      newFriends[i] = friends[i];
    }

    return newFriends;
  };

  getBillList = () => {
    let finalBill = [];
    let p = 0;
    for (let i = 0; i < this.friendCounter; i++) {
      let friendTotal = 0;
      finalBill[p++] = this.newFriends[i].friendName;
      for (let j = 0; j < this.newFriends[i].itemsTaken.length; j++) {
        for (let k = 0; k < this.itemCounter; k++) {
          if (this.newFriends[i].itemsTaken[j] === this.newItems[k].name) {
            friendTotal +=
              (this.newItems[k].price * this.newItems[k].quantity) /
              this.newItems[k].eatenBy.length;
            finalBill[p] = friendTotal;
          }
        }
      }
      p++;
    }

    console.log(finalBill);

    let table = [];
    for (let i = 0; i < finalBill.length - 1; i += 2) {
      table.push(
        <tr className="dark-green">
          <td>{finalBill[i]}</td>
          <td>{finalBill[i + 1]}</td>
        </tr>
      );
    }

    return table;
  };

  render() {
    console.log(this.newItems, this.newFriends);
    return (
      <React.Fragment>
        <h3>Final Bill of Everyone</h3>
        <div className="myTable">
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                <th>Friend Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>{this.getBillList()}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default FinalBill;
