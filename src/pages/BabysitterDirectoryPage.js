import AddBabysitter from "../components/AddBabysitter";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BabysitterCard from "../components/BabysitterCard"; 
 
//const REACT_APP_SERVER_URL = "http://localhost:5005";
 
 
function BabysitterDirectoryPage() {
  const [babysitterServices1, setbabysitterServices1] = useState([]);
 
  const getAllBabysitterServices = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/babysitterServices`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => setbabysitterServices1(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllBabysitterServices();
  }, [] );
 
  
  return (
    <div>
      <AddBabysitter refreshBabysitterServicess={getAllBabysitterServices} />

        {babysitterServices1.map((babysitterServices) => {
          <BabysitterCard key={babysitterServices._id} {...babysitterServices} />  
          return (
            <div key={babysitterServices._id} >
              <Link to={`/babysitterServices1/${babysitterServices._id}`}>
                <h3>{babysitterServices.title}</h3>
              </Link>
              


  {/* <li className="BookingCard card" key={booking._id}>
    <h3>{title}</h3>
    <h4>Description:</h4>
    <p>{description}</p>
  </li> */}


            </div>
          );
        })}     
       
    </div>
  );
}
 
export default BabysitterDirectoryPage;
