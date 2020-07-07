import React, { Component } from "react";

class FriendAdder extends Component {
  state = {
    friendName: "",
    itemTakenByFriend: [],
  };

  setFriendName = (event) => {
    this.setState({ friendName: event.target.value });
  };

  getNewItemList = () => {
    let newItems = [];
    for (let i = 0; i < this.props.itemCounter; i++) {
      newItems[i] = this.props.items[i];
    }

    return newItems;
  };

  getCheckBoxes = () => {
    let newItems = this.getNewItemList();

    return newItems.map((items) => {
      return (
        <label className="myCheckBoxes">
          {items.name}
          <input id={items.name} type="checkbox" className="m-2" />
        </label>
      );
    });
  };

  addFriend = () => {
    let newItems = this.getNewItemList();
    let itemTakenByFriend = [];
    for (let i = 0; i < this.props.itemCounter; i++) {
      let checkBoxes = document.getElementById(newItems[i].name);
      if (checkBoxes.checked) {
        itemTakenByFriend.push(newItems[i].name);
      }
    }
    this.setState({ itemTakenByFriend: itemTakenByFriend });

    this.props.sendFriendData(this.state.friendName, itemTakenByFriend);

    let name = "";
    let list = [];
    this.setState({ friendName: name, itemTakenByFriend: list });

    for (let i = 0; i < this.props.itemCounter; i++) {
      let checkBoxes = document.getElementById(newItems[i].name);
      checkBoxes.checked = false;
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="itemDiv">
        <h3>Add Friend</h3>
        <form>
          <div>
            <label className="badge badge-dark myLabel">
              Name:
              <input
                className="myInputField"
                type="text"
                name="friendName"
                value={this.state.friendName}
                onChange={this.setFriendName}
              />
            </label>
          </div>
          <div>{this.getCheckBoxes()}</div>
          <div id="rightAligned">
            <button
              type="button"
              className="mybtn btn btn-primary"
              onClick={this.addFriend}
            >
              Add Friend
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

export default FriendAdder;
