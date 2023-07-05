import AddBabysitter from "../components/AddBabysitter";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BabysitterCard from "../components/BabysitterCard"; 
 
//const REACT_APP_SERVER_URL = "http://localhost:5005";
 
 
function BabysitterDirectoryPage() {
  const [babysitterServices, setBabysitterServices] = useState([]);
  const [bookings, setBookings] = useState([]);
 
  const getAllBabysitterServices = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/babysitterServices`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => setBabysitterServices(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllBabysitterServices();
  }, [] );
 
  
  return (
    <div className="BabysitterDirectoryPage">
      <AddBabysitter refreshBabysitterServices={getAllBabysitterServices} />

        {babysitterServices.map((babysitterServices) => {
          <BabysitterCard key={babysitterServices._id} {...babysitterServices} />  
          return (
            <div className="BabysitterCard card"key={babysitterServices._id} >
              <Link to={`/babysitterServices/${babysitterServices._id}`}>
                <h3>{babysitterServices.title}</h3>
              </Link>
              


  <li className="BookingCard card" key={bookings._id}>
    <h3>babysitterName</h3>
    <h4>About Me:</h4>
    <h4>languages:</h4>
    <h4>yearsOfExperience:</h4>
    <h4>provideServiceFor:</h4>
    <h4>pricePerHour:</h4>
    <h4>supportServices:</h4>
    <p>aboutMe</p>
  </li>


            </div>
          );
        })}     
       
    </div>
  );
}
 
export default BabysitterDirectoryPage;
