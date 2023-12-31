// import AddBabysitter from "../components/AddBabysitter";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import BabysitterCard from "../components/BabysitterCard";
import Cards from "../components/Cards";
//const REACT_APP_SERVER_URL = "http://localhost:5005";

function BabysitterDirectoryPage() {
  const [babysitterServices, setBabysitterServices] = useState([]);
  const { babysitterServicesId } = useParams();

  // const [bookings, setBookings] = useState([]);

  const getAllBabysitterServices = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/babysitterServices`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setBabysitterServices(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllBabysitterServices();
  }, []);
  console.log(babysitterServices);

  return (
    <div className="BabysitterDirectoryPage">
      {/* <AddBabysitter refreshBabysitterServices={getAllBabysitterServices} /> */}
      <h1>Babysitter Directory</h1>
      <div className="BabysitterDirectory">
        
      
        <Cards />
      
      </div>
      <Link to={`/babysitterServices/add/${babysitterServicesId}`}>
        <Button>Add Me as a Babysitter</Button>
      </Link>

      {babysitterServices.map((babysitterServices) => {
        return (
          <div className="BabysitterCard card" key={babysitterServices._id}>
            <BabysitterCard
              key={babysitterServices._id}
              {...babysitterServices}
            />

            {/* <Link to={`/babysitterServices/${babysitterServices._id}`}>

            </Link> */}
            {/* <li className="BookingCard card" key={bookings._id}>
              <h3>babysitterName</h3>
              <h4>About Me:</h4>
              <h4>languages:</h4>
              <h4>yearsOfExperience:</h4>
              <h4>provideServiceFor:</h4>
              <h4>pricePerHour:</h4>
              <h4>supportServices:</h4>
              <p>aboutMe</p>
            </li> */}
          </div>
        );
      })}
    </div>
  );
}

export default BabysitterDirectoryPage;
