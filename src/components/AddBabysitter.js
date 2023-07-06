import { useEffect,useState } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import {Button} from "react-bootstrap";


//const API_URL = "http://localhost:5005";

function AddBabysitter(props) {
  const [babysitterName, setBabysitterName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [languages, setLanguages] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [provideServiceFor, setProvideServiceFor] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [supportServices, setSupportServices] = useState("");

  const [babysitterService, setBabysitterService] = useState(null);
  const { babysitterServicesId } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { babysitterServiceId } = props;
    const requestBody = { babysitterName, aboutMe,languages,supportServices,yearsOfExperience, provideServiceFor, pricePerHour,babysitterServiceId  };
    const storedToken = localStorage.getItem('authToken');

    // axios.post(url, data, config)
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/add`, 
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setBabysitterName("");
        setAboutMe("");
        setLanguages("");
        setYearsOfExperience("");
        setProvideServiceFor("");
        setPricePerHour("");
        setSupportServices("");

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
  });
  console.log(babysitterService);

  return (
    <div className="AddBabysitter">
      <h3>Add Babysitter</h3>

      <form onSubmit={handleSubmit}>
        <label>Babysitter Name:</label>
        <input
          type="text"
          name="babysitterName"
          value={babysitterName}
          onChange={(e) => setBabysitterName(e.target.value)}
        />

        <label>About Me:</label>
        <input
          type="String"
          name="aboutMe"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
   <label>Languages:</label>
        <input
          type="String"
          name="languages"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
           <label>Year Of Experience:</label>
        <input
          type="Number"
          name=" yearsOfExperience"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
        />
           <label>Provide Services For:</label>
        <input
          type="String"
          name="provideServiceFor"
          value={provideServiceFor}
          onChange={(e) => setProvideServiceFor(e.target.value)}
        />
           <label>Price per Hour:</label>
        <input
          type="Number"
          name="pricePerHour"
          value={pricePerHour}
          onChange={(e) => setPricePerHour(e.target.value)}
        />
             <label>Support Services:</label>
        <input
          type="Stringr"
          name="supportServices"
          value={supportServices}
          onChange={(e) => setSupportServices(e.target.value)}
        />
       <br />
       
        <Link to="/babysitterServices" activeClassName="active">
        <Button type="submit">Submit</Button>
              </Link>
      </form>
    </div>
  );
}

export default AddBabysitter;