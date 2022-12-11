import React from "react";
function Dropdown(props) {
  function Clicked(event) {
    const name = event.target.name;
    let value;
    if (name === "Delivery") {
      value = !props.change.Delivery;
    } else if (name === "DineIn") {
      value = !props.change.DineIn;
    } else if (name === "TakeAway") {
      value = !props.change.TakeAway;
    } else if (name === "Paid") {
      value = !props.change.Paid;
    } else if (name === "Unpaid") {
      value = !props.change.Unpaid;
    } else if (name === "NewOrder") {
      value = !props.change.NewOrder;
    } else if (name === "OrderUpdated") {
      value = !props.change.OrderUpdated;
    }
    props.filter((prevtoSend) => {
      return {
        ...prevtoSend,
        [name]: value
      };
    });
    props.target();
  }
  function CheckIt2() {
    console.log(document.getElementById("Delivery2").checked);
    if (props.change.Delivery===true&&document.getElementById("Delivery2").checked===false) {
      console.log("In");
      document.getElementById("Delivery2").checked=true;
    }else if(props.change.Delivery===false&&document.getElementById("Delivery2").checked===true){
      document.getElementById("Delivery2").checked=false;
    }
    if (props.change.DineIn===true&&document.getElementById("DineIn2").checked===false) {
      document.getElementById("DineIn2").checked=true;
    }else if(props.change.DineIn===false&&document.getElementById("DineIn2").checked===true){
      document.getElementById("DineIn2").checked=false;
    }
    if (props.change.TakeAway===true&&document.getElementById("TakeAway2").checked===false) {
      document.getElementById("TakeAway2").checked=true;
    }else if(props.change.TakeAway===false&&document.getElementById("TakeAway2").checked===true){
      document.getElementById("TakeAway2").checked=false;
    }
    if (props.change.Paid===true&&document.getElementById("Paid2").checked===false) {
      document.getElementById("Paid2").checked=true;
    }else if(props.change.Paid===false&&document.getElementById("Paid2").checked===true){
      document.getElementById("Paid2").checked=false;
    }
    if (props.change.Unpaid===true&&document.getElementById("Unpaid2").checked===false) {
      document.getElementById("Unpaid2").checked=true;
    }else if(props.change.Unpaid===false&&document.getElementById("Unpaid2").checked===true){
      document.getElementById("Unpaid2").checked=false;
    }
    if (props.change.NewOrder===true&&document.getElementById("NewOrder2").checked===false) {
      document.getElementById("NewOrder2").checked=true;
    }else if(props.change.NewOrder===false&&document.getElementById("NewOrder2").checked===true){
      document.getElementById("NewOrder2").checked=false;
    }
    if (props.change.OrderUpdated===true&&document.getElementById("OrderUpdated2").checked===false) {
      document.getElementById("OrderUpdated2").checked=true;
    }else if(props.change.OrderUpdated===false&&document.getElementById("OrderUpdated2").checked===true){
      document.getElementById("OrderUpdated2").checked=false;
    }
  }
  setTimeout(CheckIt2,500);
  if (props.field === "Order type") {
    return (
      <th className="btn-group">
        <button
          class="btn dropdown-toggle mx-0 px-0"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
            id="Delivery2"
              name="Delivery"
              type="checkbox"
              onClick={Clicked}
            />
            <label className="mx-1" style={{ color: "#E63946" }}>
              Delivery
            </label>
          </div>
          <div className="dropdown-item">
            <input
            id="DineIn2"
              name="DineIn"
              onClick={Clicked}
              type="checkbox"
            />
            <label className="mx-1" style={{ color: "#4361EE" }}>
              Dine in
            </label>
          </div>
          <div className="dropdown-item">
            <input
            id="TakeAway2"
              name="TakeAway"
              onClick={Clicked}
              type="checkbox"
            />
            <label className="mx-1" style={{ color: "#F7B801" }}>
              Take away
            </label>
          </div>
        </div>
      </th>
    );
  } else if (props.field === "Order status") {
    return (
      <th className="dropdown">
        <button
          className="btn dropdown-toggle mx-0 px-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
            id="NewOrder2"
              name="NewOrder"
              onClick={Clicked}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(235, 94, 40, 0.1)",
                color: "#EB5E28"
              }}
              className="mx-1"
            >
              New order
            </label>
          </div>
          <div className="dropdown-item">
            <input
            id="OrderUpdated2"
              name="OrderUpdated"
              onClick={Clicked}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(111, 45, 189, 0.1)",
                color: "#6F2DBD"
              }}
              className="mx-1"
            >
              Order updated
            </label>
          </div>
        </div>
      </th>
    );
  } else {
    return (
      <th className="dropdown">
        <button
          class="btn dropdown-toggle mx-0 px-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
            id="Paid2"
              name="Paid"
              onClick={Clicked}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(47, 191, 113, 0.1)",
                color: "#2FBF71"
              }}
              className="mx-1"
            >
              Paid
            </label>
          </div>
          <div className="dropdown-item">
            <input
            id="Unpaid2"
              name="Unpaid"
              onClick={Clicked}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(217, 4, 41, 0.1)",
                color: "#D90429"
              }}
              className="mx-1"
            >
              Unpaid
            </label>
          </div>
        </div>
      </th>
    );
  }
}
export default Dropdown;
