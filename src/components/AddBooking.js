import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

//const API_URL = "http://localhost:5005";

function AddBooking() {
  const [babysitterName, setBabysitterName] = useState("");
  const [dateOfServices, setDateOfService] = useState("");
  const [durationOfServices, setDurationOfService] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");

  const [babysitterService, setBabysitterService] = useState(null);
  const { babysitterServicesId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // We need the babysitter id when creating the new task
    // const { bookingId } = props;
    // Create an object representing the body of the POST request
    const requestBody = {
      babysitterServicesId,
      dateOfServices,
      durationOfServices,
      pricePerHour,
    };
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/booking`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state to clear the inputs
        setBabysitterName("");
        setDateOfService("");
        setDurationOfService("");
        setPricePerHour("");

        // Invoke the callback function coming through the props
        // from the BabysitterDetailsPage, to refresh the babysitter details
      })
      .catch((error) => console.log(error));
  };
  const getBabysitterService = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/${babysitterServicesId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      .then((response) => {
        console.log(response.data);
        const oneBabysitterService = response.data;
        setBabysitterService(oneBabysitterService);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBabysitterService();
  }, [babysitterServicesId]);
  console.log(babysitterService);

  return (
    <div className="AddBooking">
      <h3>Add New Booking</h3>

      <form onSubmit={handleSubmit}>
        {babysitterService && (
          <>
            <p>Babysitter Name:</p>
            <h1>{babysitterService.babysitterName}</h1>
            <label>Date Of Service:</label>
            <input
              type="Date"
              name="dateOfServices"
              value={dateOfServices}
              onChange={(e) => setDateOfService(e.target.value)}
            />
            <label>Duration Of Service:</label>
            <input
              type="Number"
              name="durationOfService"
              value={durationOfServices}
              onChange={(e) => setDurationOfService(e.target.value)}
            />
            <label>Price per Hour:</label>
            <input
              type="Number"
              name="pricePerHour"
              value={pricePerHour}
              onChange={(e) => setPricePerHour(e.target.value)}
            />
            <Button size="lg" type="submit">
              Add Booking
            </Button>
          </>
        )}
      </form>
    </div>
  );
}

export default AddBooking;
