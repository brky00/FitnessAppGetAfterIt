import React, { useEffect, useState} from "react";
import "./Checkout.css"


const CheckoutForm = ({cartItems}) => {


    const [totalItems, setTotalItems] = useState(() =>
    parseInt(localStorage.getItem("totalItems")) ||
    cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  );
  const [totalPrice, setTotalPrice] = useState(() =>
    parseFloat(localStorage.getItem("totalPrice")) ||
    cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
  );

  console.log("total item test;:", totalItems);
  console.log("total pris test;:", totalPrice);
  console.log("cartItems checkOut: ", cartItems);
   

       
   

   return (
    <div className="checkout-container">
        <h1>Checkout</h1>
        <form  className="checkout-form">
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullname" name="fullName" title="First and Last Name" required/>
            </div>

            <div className="form-group">
                <label htmlFor="adress">Address</label>
                <input type="text" id="address" name="address" title="Shipping Address Details" required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required/>
            </div>

            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="tel" id="mobileNumber" name="mobile" pattern="[0-9]{8}" title="Mobile number should be 8 digits long without any dashes or spaces" required/>
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth </label>
                <input type="date" id="dob" name="dob" required/>
            </div>

            <div className="form-group">
                    <label htmlFor="totalPrice">Total Price</label>
                    <input style={{border: "2px solid"}} type="text" id="totalPrice" name="totalPrice" value={totalPrice} readOnly/>
                </div>
            <div className="form-group">
                    <label htmlFor="totalProducts">Amount of Products</label>
                    <input style={{border: "2px solid"}} type="text" id="totalProducts" name="totalProducts" value={totalItems} readOnly />
                </div>
            
            <div className="form-group">
                <button type="submit" className="submit-button">Complete Order</button>
            </div>

        
        </form>
    </div>
   )
 

};

export default CheckoutForm;
