import React, { useEffect, useState} from "react";
import "./Checkout.css"
import { db } from "./firebase-config";
import { doc, getDoc, writeBatch,Timestamp,collection,addDoc } from "firebase/firestore"; 
import Swal from 'sweetalert2';
import emailjs from "emailjs-com";


const CheckoutForm = ({cartItems}) => {
  // State hooks for form inputs
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');


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



  const handleCheckout = async (e) => {
    e.preventDefault(); 
      // Loading
  Swal.fire({
    title: 'Processing your order...',
    text: 'Please wait.',
    didOpen: () => {
      Swal.showLoading()
    },
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  });

  // Send e-post via EmailJS
  emailjs.send('service_8mmmjwo', 'template_f9jml1b', {
    to_email: email,
    name: fullName,
  }).then(function(response) {
    console.log('Email sent successfully:', response);
  }, function(error) {
    console.error('Error sending email:', error);
  });


    
    const batch = writeBatch(db);
  
    try {
      const productUpdates = {}; // Object for all updates
  
      for (const cartItem of cartItems) {
        const { id, productSize, selectedImgName, quantity } = cartItem;
  
        if (!productUpdates[id]) {
          // get the document from firestore
          const docRef = doc(db, "products", id);
          console.log("docRef: ",docRef);

          const docSnap = await getDoc(docRef);
          console.log("docSnap: ",docSnap);
  
          if (!docSnap.exists()) {
            console.error(`Document is not found: ${id}`);
            continue;
          }
  
          productUpdates[id] = { docRef, sizeDetails: { ...docSnap.data().sizeDetails } };
          console.log(` productUpdates for ${[id]} : ${productUpdates[id]} `);
        }
  
        // sizeDetailArray which we need
        const sizeDetailArray = productUpdates[id].sizeDetails[productSize];
        console.log("sizeDetailArray: ",sizeDetailArray);
  
        // find right fileName and updated the quantity
        const fileIndex = sizeDetailArray.findIndex(detail => detail.fileName === selectedImgName);
        if (fileIndex === -1) {
          console.error(`fileName doesnt exist: ${selectedImgName} in the size ${productSize}`);
          continue;
        }
  
        const newQuantity = sizeDetailArray[fileIndex].quantity - quantity;
        if (newQuantity < 0) {
          console.error(`Not enough in the stock: ${selectedImgName}, quantity: ${quantity}`);
          continue;
        }
  
        // update the quantity here
        sizeDetailArray[fileIndex] = { ...sizeDetailArray[fileIndex], quantity: newQuantity };
      }
      console.log("productUpdates: ",productUpdates);
  
      // all updates is added to batch.
      Object.values(productUpdates).forEach(({ docRef, sizeDetails }) => {
        batch.update(docRef, { sizeDetails });
      });

      //start for adding order to collection "orders"


      // Constructing order data from cartItems and form inputs. 
      //And we use traditional DOM method on js here.
      const orderData = {
        name: fullName,
        email: email,
        address: address,
        date: Timestamp.now(),
        status: "Pending",
        telNo: parseInt(mobileNumber),
        totalItems: totalItems,
        totalPrice: totalPrice,
        cartItems: cartItems.map(item => ({
          id: item.id,
          price: item.price,
          productName: item.productName,
          productSize: item.productSize,
          quantity: item.quantity,
          selectedImgName: item.selectedImgName
        }))
      };
    
 
  
      // commited all batchs
      await batch.commit();

      const ordersRef = collection(db, "orders");
      await addDoc(ordersRef, orderData);

      // Alerting the user that the order has been placed
      console.log('Your order has been ordered successfully.');
      Swal.fire("Success!", "Your order has been placed successfully.", "success");
      
    } catch (error) {
      console.error('An error occurred during batch processing: ', error);
      Swal.fire("Error", "An error occurred during the checkout process.", "error");
    }
  };



  console.log("fullName,address,email,mobileNumber,birthDate: ",fullName,address,email,mobileNumber,birthDate);
  
  
   

       
   

   return (
    <div className="checkout-container">

    
        <h1>Checkout</h1>
        <form  className="checkout-form">
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullname" name="fullName" title="First and Last Name"  value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="adress">Address</label>
                <input type="text" id="address" name="address" title="Shipping Address Details"  value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input type="tel" id="mobileNumber" name="mobile" pattern="[0-9]{8}" title="Mobile number should be 8 digits long without any dashes or spaces"  
                value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required/>
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date of Birth </label>
                <input type="date" id="dob" name="dob"  value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)}  required/>
            </div>

            <div className="form-group">
                    <label className="total-price-label" htmlFor="totalPrice">Total Price</label>
                    <input className="read-only-input" style={{border: "2px solid #ced4da", backgroundColor: "#e9ecef",pointerEvents: "none", 
            outline: "none"}}  type="text" id="totalPrice" name="totalPrice" value={totalPrice} readOnly/>
                </div>
            <div className="form-group">
                    <label className="total-products-label" htmlFor="totalProducts">Amount of Products</label>
                    <input className="read-only-input" style={{border: "2px solid #ced4da", backgroundColor: "#e9ecef",pointerEvents: "none", 
            outline: "none"}}  type="text" id="totalProducts" name="totalProducts" value={totalItems} readOnly />
                </div>
            
            <div className="form-group ">
                <button type="submit" className="submit-button submit-button-checkOut" onClick={handleCheckout}>Complete Order</button>
            </div>

        
        </form>
    </div>
   )
 

};

export default CheckoutForm;
