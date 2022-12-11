import React from "react";
function Filter(props) {
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
  function CheckIt() {
    if (
      props.change.Delivery === true &&
      document.getElementById("Delivery").checked === false
    ) {
      document.getElementById("Delivery").checked = true;
    } else if (
      props.change.Delivery === false &&
      document.getElementById("Delivery").checked === true
    ) {
      document.getElementById("Delivery").checked = false;
    }
    if (
      props.change.DineIn === true &&
      document.getElementById("DineIn").checked === false
    ) {
      document.getElementById("DineIn").checked = true;
    } else if (
      props.change.DineIn === false &&
      document.getElementById("DineIn").checked === true
    ) {
      document.getElementById("DineIn").checked = false;
    }
    if (
      props.change.TakeAway === true &&
      document.getElementById("TakeAway").checked === false
    ) {
      document.getElementById("TakeAway").checked = true;
    } else if (
      props.change.TakeAway === false &&
      document.getElementById("TakeAway").checked === true
    ) {
      document.getElementById("TakeAway").checked = false;
    }
    if (
      props.change.Paid === true &&
      document.getElementById("Paid").checked === false
    ) {
      document.getElementById("Paid").checked = true;
    } else if (
      props.change.Paid === false &&
      document.getElementById("Paid").checked === true
    ) {
      document.getElementById("Paid").checked = false;
    }
    if (
      props.change.Unpaid === true &&
      document.getElementById("Unpaid").checked === false
    ) {
      document.getElementById("Unpaid").checked = true;
    } else if (
      props.change.Unpaid === false &&
      document.getElementById("Unpaid").checked === true
    ) {
      document.getElementById("Unpaid").checked = false;
    }
    if (
      props.change.NewOrder === true &&
      document.getElementById("NewOrder").checked === false
    ) {
      document.getElementById("NewOrder").checked = true;
    } else if (
      props.change.NewOrder === false &&
      document.getElementById("NewOrder").checked === true
    ) {
      document.getElementById("NewOrder").checked = false;
    }
    if (
      props.change.OrderUpdated === true &&
      document.getElementById("OrderUpdated").checked === false
    ) {
      document.getElementById("OrderUpdated").checked = true;
    } else if (
      props.change.OrderUpdated === false &&
      document.getElementById("OrderUpdated").checked === true
    ) {
      document.getElementById("OrderUpdated").checked = false;
    }
  }
  setTimeout(CheckIt, 500);
  return (
    <div class="btn-group">
      <button
        type="button"
        className="btn btn-light border border-secondary rounded my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          className="mx-1"
          style={{ width: "30px", height: "30px" }}
          src="../filter.jpg"
          alt="filter"
        />
        Filters
      </button>
      <div class="dropdown-menu">
        <h6 class="dropdown-header">Order Status</h6>
        <div className="dropdown-item mx-1 px-0 text-left">
          <input
            id="Delivery"
            name="Delivery"
            type="checkbox"
            onClick={Clicked}
            value={!props.change.Delivery}
          />
          <label className="mx-1">Delivery</label>
        </div>
        <div className="dropdown-item mx-1 px-0 text-left">
          <input
            id="DineIn"
            name="DineIn"
            onClick={Clicked}
            value={!props.change.DineIn}
            type="checkbox"
          />
          <label className="mx-1">Dine in</label>
        </div>
        <div className="dropdown-item mx-1 px-0  text-left">
          <input
            id="TakeAway"
            name="TakeAway"
            onClick={Clicked}
            value={!props.change.TakeAway}
            type="checkbox"
          />
          <label className="mx-1">Take away</label>
          <h6 class="dropdown-header">Payment</h6>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              id="Paid"
              name="Paid"
              onClick={Clicked}
              value={!props.change.Paid}
              type="checkbox"
            />
            <label className="mx-1">Paid</label>
          </div>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              id="Unpaid"
              name="Unpaid"
              onClick={Clicked}
              value={!props.change.Unpaid}
              type="checkbox"
            />
            <label className="mx-1">Unpaid</label>
          </div>
          <h6 class="dropdown-header">Order Type</h6>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              id="NewOrder"
              name="NewOrder"
              value={!props.change.NewOrder}
              onClick={Clicked}
              type="checkbox"
            />
            <label className="mx-1">New order</label>
          </div>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              id="OrderUpdated"
              name="OrderUpdated"
              onClick={Clicked}
              value={!props.change.OrderUpdated}
              type="checkbox"
            />
            <label className="mx-1">Order updated</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
