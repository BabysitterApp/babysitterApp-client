import { useState } from "react";
import axios from "axios";

//const API_URL = "http://localhost:5005";


function AddBooking(props) {
    const [babysitterName, setBabysitterName] = useState("");
  const [dateOfServices, setDateOfService] = useState("");
  const [durationOfServices, setDurationOfService] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the babysitter id when creating the new task
    const { bookingId } = props;
    // Create an object representing the body of the POST request
    const requestBody =  {babysitterName, dateOfServices,durationOfServices,pricePerHour,bookingId };
  // Get the token from the localStorage
  const storedToken = localStorage.getItem('authToken');
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/bookings`, requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } } 
      )
      .then((response) => {
        // Reset the state to clear the inputs
        setBabysitterName("")
         setDateOfService("");
        setDurationOfService("");
        setPricePerHour("");
      
        // Invoke the callback function coming through the props
        // from the BabysitterDetailsPage, to refresh the babysitter details
        props.refreshBabysitterService();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="AddBooking">
      <h3>Add New Booking</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Babysitter Name:</label>
        <input
          type="text"
          name="babysitterName"
          value={babysitterName}
          onChange={(e) => setBabysitterName(e.target.value)}
        />

        <label>Date Of Service:</label>
        <textarea
          type="Date"
          name="dateOfServices"
          value={dateOfServices}
          onChange={(e) =>  setDateOfService(e.target.value)}
        />
<label>Duration Of Service:</label>
        <textarea
          type="Number"
          name="dateOfService"
          value={durationOfServices}
          onChange={(e) =>  setDurationOfService(e.target.value)}
        />
        <label>Price per Hour:</label>
        <textarea
          type="Number"
          name="pricePerHour"
          value={pricePerHour}
          onChange={(e) =>  setPricePerHour(e.target.value)}
        />
        <button type="submit">Add Booking</button>
      </form>
    </div>
  );
}

export default AddBooking;