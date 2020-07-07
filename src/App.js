import React, { Component } from "react";
import Welcome from "./components/Welcome";
import ItemAdder from "./components/ItemAdder";
import ItemTable from "./components/ItemTable";
import FriendAdder from "./components/FriendAdder";
import FinalBill from "./components/FinalBill";

class App extends Component {
  state = {
    itemCounter: 0,
    items: [
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
      { name: "", price: 0, quantity: 0, eatenBy: [] },
    ],
    boolItemAddingDone: false,
    boolFriendAddingDone: false,
    friendCounter: 0,
    friends: [
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
      {
        friendName: "",
        itemsTaken: [],
      },
    ],
  };

  getData = (name, price, quantitiy) => {
    let itemCounter = this.state.itemCounter;
    let newItems = [...this.state.items];
    newItems[itemCounter].name = name;
    newItems[itemCounter].price = price;
    newItems[itemCounter].quantity = quantitiy;
    itemCounter++;

    this.setState({ items: newItems, itemCounter: itemCounter });
    // console.log(this.state.items);
  };

  getFriendData = (friendName, itemTakenByFriend) => {
    let friendCounter = this.state.friendCounter;
    let newFriends = [...this.state.friends];
    newFriends[friendCounter].friendName = friendName;
    newFriends[friendCounter].itemsTaken = itemTakenByFriend;
    friendCounter++;

    this.setState({ friendCounter: friendCounter });
  };

  renderItemAdder = () => {
    if (this.state.boolItemAddingDone === false) {
      return (
        <ItemAdder
          sendName={this.getData}
          table={this.getRow}
          done={this.itemAddingDone}
        />
      );
    } else if (this.state.boolFriendAddingDone === false) {
      return (
        <FriendAdder
          items={this.state.items}
          itemCounter={this.state.itemCounter}
          sendFriendData={this.getFriendData}
          done={this.friendAddingDone}
        />
      );
    } else {
      return (
        <FinalBill
          items={this.state.items}
          itemCounter={this.state.itemCounter}
          friends={this.state.friends}
          friendCounter={this.state.friendCounter}
        />
      );
    }
  };

  itemAddingDone = () => {
    let boolItemAddingDone = true;
    let boolFriendAddingDone = false;
    this.setState({
      boolItemAddingDone: boolItemAddingDone,
      boolFriendAddingDone: boolFriendAddingDone,
    });
  };

  friendAddingDone = () => {
    let boolFriendAddingDone = true;
    this.setState({ boolFriendAddingDone: boolFriendAddingDone });
  };

  render() {
    return (
      <div id="mainApp">
        <Welcome />
        {this.renderItemAdder()}

        <ItemTable
          items={this.state.items}
          itemCounter={this.state.itemCounter}
          getRow={this.getRows}
        />
      </div>
    );
  }
}

export default App;
