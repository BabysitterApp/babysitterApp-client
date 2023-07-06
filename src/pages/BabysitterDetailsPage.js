import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import AddBooking from "../components/AddBooking";
import BookingCard from "../components/BookingCard";

//const API_URL = "http://localhost:5005";

function BabysitterDetailsPage(props) {
  const [babysitterService, setBabysitterService] = useState(null);
  const { babysitterServicesId } = useParams();

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
  },[babysitterServicesId]);
  console.log(babysitterService);
  return (
    <div className="BabysitterDetails">
      <h1>"Babysitter Details"</h1>
      {babysitterService && (
        <>
          <h1>{babysitterService.babysitterName}</h1>
          <p>{babysitterService.aboutMe}</p>
          <h4>{babysitterService.languages}</h4>
          <h4>{babysitterService.yearsOfExperience}</h4>
          <h4>{babysitterService.provideServiceFor}</h4>
          <h4>{babysitterService.pricePerHour}</h4>
          <h4>{babysitterService.supportServices}</h4>
        </>
      )}

      {/* <AddBooking
        refreshBabysitterService={getBabysitterService}
        babysitterServiceId={babysitterServicesId}
      /> */}

      {/* {babysitterService &&
        babysitterService.bookings.map((booking) => (
          <BookingCard key={booking._id} {...booking} />
        ))}
         */}

      <Link to="/babysitterServices">
        <button>Back to Babysitters</button>
      </Link>

      <Link to={`/babysitterServices/edit/${babysitterServicesId}`}>
        <button>Edit Babysitter</button>
      </Link>
      <Link to={`/babysitterServices/book/${babysitterServicesId}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
}

export default BabysitterDetailsPage;
