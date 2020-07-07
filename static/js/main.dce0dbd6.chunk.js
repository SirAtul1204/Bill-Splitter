(this["webpackJsonpbill-splitter"]=this["webpackJsonpbill-splitter"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),m=n.n(i),l=n(5),s=n(1),c=n(2),o=n(4),d=n(3),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome to Bill Splitter"),r.a.createElement("p",{id:"info"},"Ever went to a Restaurant with friends and you can't divide the bill equally because of the annoying vegetarian guy who refused to pay for the items he didn't eat and then the maths get tough. We are here to help you with that"))}}]),n}(a.Component),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",price:"",quantity:""},e.addItem=function(){e.props.sendName(e.state.name,e.state.price,e.state.quantity);e.setState({name:"",price:"",quantity:""})},e.changeName=function(t){e.setState({name:t.target.value})},e.changePrice=function(t){e.setState({price:parseInt(t.target.value)})},e.changeQuantity=function(t){e.setState({quantity:parseInt(t.target.value)})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"itemDiv"},r.a.createElement("h3",null,"Add Items"),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{className:"badge badge-dark myLabel"},"Name:",r.a.createElement("input",{className:"myInputField",type:"text",name:"name",value:this.state.name,onChange:this.changeName}))),r.a.createElement("div",null,r.a.createElement("label",{className:"badge badge-dark myLabel"},"Price:",r.a.createElement("input",{className:"myInputField",type:"number",name:"price",value:this.state.price,onChange:this.changePrice}))),r.a.createElement("div",null,r.a.createElement("label",{className:"badge badge-dark myLabel"},"Quantity:",r.a.createElement("input",{className:"myInputField",type:"number",name:"quantity",style:{width:"64vw"},value:this.state.quantity,onChange:this.changeQuantity}))),r.a.createElement("div",{id:"rightAligned"},r.a.createElement("button",{type:"button",className:"mybtn btn btn-primary",onClick:this.addItem},"Add More"),r.a.createElement("button",{className:"mybtn btn btn-danger",type:"button",onClick:this.props.done},"Done"))))}}]),n}(a.Component),f=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i))).total=0,e.newItemList=function(e,t){for(var n=[],a=0;a<e;a++)n[a]=t[a];return n},e.getRows=function(){var t=e.props.itemCounter,n=e.props.items,a=e.newItemList(t,n);return e.handleTotal(t,a),a.map((function(e){return r.a.createElement("tr",{className:"bg-danger"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.quantity))}))},e.handleTotal=function(t,n){for(var a=0,r=0;r<t;r++)a+=n[r].price*n[r].quantity;e.total=a},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"myTable"},r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Quantity"))),r.a.createElement("tbody",null,this.getRows(),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},"Total"),r.a.createElement("td",null,this.total)))))}}]),n}(a.Component),y=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i))).state={friendName:"",itemTakenByFriend:[]},e.setFriendName=function(t){e.setState({friendName:t.target.value})},e.getNewItemList=function(){for(var t=[],n=0;n<e.props.itemCounter;n++)t[n]=e.props.items[n];return t},e.getCheckBoxes=function(){return e.getNewItemList().map((function(e){return r.a.createElement("label",{className:"myCheckBoxes"},e.name,r.a.createElement("input",{id:e.name,type:"checkbox",className:"m-2"}))}))},e.addFriend=function(){for(var t=e.getNewItemList(),n=[],a=0;a<e.props.itemCounter;a++){document.getElementById(t[a].name).checked&&n.push(t[a].name)}e.setState({itemTakenByFriend:n}),e.props.sendFriendData(e.state.friendName,n);e.setState({friendName:"",itemTakenByFriend:[]});for(var r=0;r<e.props.itemCounter;r++){document.getElementById(t[r].name).checked=!1}},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"itemDiv"},r.a.createElement("h3",null,"Add Friend"),r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{className:"badge badge-dark myLabel"},"Name:",r.a.createElement("input",{className:"myInputField",type:"text",name:"friendName",value:this.state.friendName,onChange:this.setFriendName}))),r.a.createElement("div",null,this.getCheckBoxes()),r.a.createElement("div",{id:"rightAligned"},r.a.createElement("button",{type:"button",className:"mybtn btn btn-primary",onClick:this.addFriend},"Add Friend"),r.a.createElement("button",{className:"mybtn btn btn-danger",type:"button",onClick:this.props.done},"Done"))))}}]),n}(a.Component),h=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).getNewItems=function(e,t){for(var n=[],a=0;a<e;a++)n[a]=t[a];return n},a.getNewFriends=function(e,t){for(var n=[],a=0;a<e;a++)n[a]=t[a];return n},a.getBillList=function(){for(var e=[],t=0,n=0;n<a.friendCounter;n++){var i=0;e[t++]=a.newFriends[n].friendName;for(var m=0;m<a.newFriends[n].itemsTaken.length;m++)for(var l=0;l<a.itemCounter;l++)a.newFriends[n].itemsTaken[m]===a.newItems[l].name&&(i+=a.newItems[l].price*a.newItems[l].quantity/a.newItems[l].eatenBy.length,e[t]=i);t++}console.log(e);for(var s=[],c=0;c<e.length-1;c+=2)s.push(r.a.createElement("tr",{className:"dark-green"},r.a.createElement("td",null,e[c]),r.a.createElement("td",null,e[c+1])));return s},a.itemCounter=a.props.itemCounter,a.items=a.props.items,a.friends=a.props.friends,a.friendCounter=a.props.friendCounter,a.newItems=a.getNewItems(a.itemCounter,a.items),a.newFriends=a.getNewFriends(a.friendCounter,a.friends);for(var i=0;i<a.newItems.length;i++)for(var m=0;m<a.newFriends.length;m++)for(var l=0;l<a.newFriends[m].itemsTaken.length;l++)a.newItems[i].name===a.newFriends[m].itemsTaken[l]&&a.newItems[i].eatenBy.push(a.newFriends[m].friendName);return a}return Object(c.a)(n,[{key:"render",value:function(){return console.log(this.newItems,this.newFriends),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Final Bill of Everyone"),r.a.createElement("div",{className:"myTable"},r.a.createElement("table",{className:"table table-dark table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Friend Name"),r.a.createElement("th",null,"Amount"))),r.a.createElement("tbody",null,this.getBillList()))))}}]),n}(a.Component),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i))).state={itemCounter:0,items:[{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]},{name:"",price:0,quantity:0,eatenBy:[]}],boolItemAddingDone:!1,boolFriendAddingDone:!1,friendCounter:0,friends:[{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]},{friendName:"",itemsTaken:[]}]},e.getData=function(t,n,a){var r=e.state.itemCounter,i=Object(l.a)(e.state.items);i[r].name=t,i[r].price=n,i[r].quantity=a,r++,e.setState({items:i,itemCounter:r})},e.getFriendData=function(t,n){var a=e.state.friendCounter,r=Object(l.a)(e.state.friends);r[a].friendName=t,r[a].itemsTaken=n,a++,e.setState({friendCounter:a})},e.renderItemAdder=function(){return!1===e.state.boolItemAddingDone?r.a.createElement(p,{sendName:e.getData,table:e.getRow,done:e.itemAddingDone}):!1===e.state.boolFriendAddingDone?r.a.createElement(y,{items:e.state.items,itemCounter:e.state.itemCounter,sendFriendData:e.getFriendData,done:e.friendAddingDone}):r.a.createElement(h,{items:e.state.items,itemCounter:e.state.itemCounter,friends:e.state.friends,friendCounter:e.state.friendCounter})},e.itemAddingDone=function(){e.setState({boolItemAddingDone:!0,boolFriendAddingDone:!1})},e.friendAddingDone=function(){e.setState({boolFriendAddingDone:!0})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"mainApp"},r.a.createElement(u,null),this.renderItemAdder(),r.a.createElement(f,{items:this.state.items,itemCounter:this.state.itemCounter,getRow:this.getRows}))}}]),n}(a.Component);n(13),n(14);m.a.render(r.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dce0dbd6.chunk.js.map