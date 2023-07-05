import { useState } from "react";
import axios from "axios";

//const API_URL = "http://localhost:5005";

function AddBabysitter(props) {
  const [babysitterName, setBabysitterName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [languages, setLanguages] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [provideServiceFor, setProvideServiceFor] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [supportServices, setSupportServices] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const { babysitterServiceId } = props;
    const requestBody = { babysitterName, aboutMe,languages,supportServices,yearsOfExperience, provideServiceFor, pricePerHour,babysitterServiceId  };
    const storedToken = localStorage.getItem('authToken');

    // axios.post(url, data, config)
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices`, 
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


        props.refreshBabysitterServices();
      })
      .catch((error) => console.log(error));
  };


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
        <textarea
          type="String"
          name="aboutMe"
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
        />
   <label>Languages:</label>
        <textarea
          type="String"
          name="languages"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
        />
           <label>Year Of Experience:</label>
        <textarea
          type="Number"
          name=" yearsOfExperience"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
        />
           <label>Provide Services For:</label>
        <textarea
          type="String"
          name="provideServiceFor"
          value={provideServiceFor}
          onChange={(e) => setProvideServiceFor(e.target.value)}
        />
           <label>Price per Hour:</label>
        <textarea
          type="Number"
          name="pricePerHour"
          value={pricePerHour}
          onChange={(e) => setPricePerHour(e.target.value)}
        />
             <label>Support Services:</label>
        <textarea
          type="Stringr"
          name="supportServices"
          value={supportServices}
          onChange={(e) => setSupportServices(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBabysitter;