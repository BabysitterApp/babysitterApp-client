
import {  useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";
import Select from "react-select";


//const REACT_APP_SERVER_URL = "http://localhost:5005";

function EditBabysitterPage(props) {
  const [babysitterName, setBabysitterName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [languages, setLanguages] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [provideServiceFor, setProvideServiceFor] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [supportServices, setSupportServices] = useState("");

 
  const { babysitterServicesId } = useParams();
  
  const navigate = useNavigate();
  const handleLanguagesChange = (selectedOptions) => {
    setLanguages(selectedOptions);
  };

  const handleProvideServiceForChange = (selectedOptions) => {
    setProvideServiceFor(selectedOptions);
  };

  const handleSupportServicesChange = (selectedOptions) => {
    setSupportServices(selectedOptions);
  };
  
  useEffect(() => {                                  
    
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    //axios.get(url, config)
    axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/${babysitterServicesId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }   
      )
      .then((response) => {
        /* 
          We update the state with the Babysitter data coming from the response.
          This way we set inputs to show the actual title and description of the Babysitter
        */
        const oneBabysitterServices = response.data;
        setBabysitterName(oneBabysitterServices.babysitterName);
        setAboutMe(oneBabysitterServices.aboutMe);
        setLanguages(oneBabysitterServices.languages);
        setYearsOfExperience(oneBabysitterServices.yearsOfExperience);
        setProvideServiceFor(oneBabysitterServices.provideServiceFor);
        setPricePerHour(oneBabysitterServices.pricePerHour);
        setSupportServices(oneBabysitterServices.supportServices);
      })

      .catch((error) => console.log(error));
    
  }, [babysitterServicesId]);

  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { babysitterName,
      aboutMe,
      languages,
      supportServices,
      yearsOfExperience,
      provideServiceFor,
      pricePerHour };
   // Get the token from the localStorage
   const storedToken = localStorage.getItem('authToken');  
    // Make a PUT request to update the Babysitter

    //axios.put(url, data, config)
    axios.put(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/${babysitterServicesId}`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }   
      )
      .then((response) => {
        navigate(`/babysitterServices/edit/${babysitterServicesId}`)
      });
  };

    
  const deleteBabysitterServices = () => {                    //  <== ADD
    // Make a DELETE request to delete the Babysitter
    const storedToken = localStorage.getItem('authToken');    

    //axios.delete(url, config)
    axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/api/babysitterServices/${babysitterServicesId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }   
      )   
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of Babysitters.
        navigate("/babysitterServices");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div>
      <h3>Edit the Babysitter</h3>

      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Form.Label>Babysitter Name:</Form.Label>
          <Form.Control
            type="text"
            name="babysitterName"
            value={babysitterName}
            onChange={(e) => setBabysitterName(e.target.value)}
          />
          <Form.Label>About Me:</Form.Label>
          <Form.Control
            type="text"
            name="aboutMe"
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
          <Form.Label>Languages:</Form.Label>
          <Select
            isMulti
            options={[
              { value: "English", label: "English" },
              { value: "German", label: "German" },
              { value: "Spanish", label: "Spanish" },
              { value: "French", label: "French" },
            ]}
            value={languages}
            onChange={handleLanguagesChange}
          />
          <Form.Label>Years Of Babysitting Experience:</Form.Label>
          <Form.Control
            type="Number"
            name=" yearsOfExperience"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
          />

          <Form.Label>Provide Services For: (Child Category)</Form.Label>
          <Select
            isMulti
            options={[
              { value: "Baby(0-2yr)", label: "Baby(0-2yr)" },
              { value: "toddler(2-4yr)", label: "toddler(2-4yr)" },
              { value: "Child(4-10yr)", label: "Child(4-10yr)" },
            ]}
            value={provideServiceFor}
            onChange={handleProvideServiceForChange}
          />
          <Form.Label>Price per Hour:</Form.Label>
          <Form.Control
            type="Number"
            name="pricePerHour"
            value={pricePerHour}
            onChange={(e) => setPricePerHour(e.target.value)}
          />
          <Form.Label>Support Services:</Form.Label>
          <Select
            isMulti
            options={[
              { value: "Pickup Services", label: "Pickup Services" },
              { value: "Household Help", label: "Household Help" },
              { value: "Cooking & Feeding", label: "Cooking & Feeding" },
              { value: "Bathe children", label: "Bathe children" },
              { value: "Play & Read", label: "Play & Read" },
              { value: "Put child to bed", label: "Put child to bed" },
              { value: "Help with homework", label: "Help with homework" },
              { value: "Activities", label: "Activities" },
            ]}
            value={supportServices}
            onChange={handleSupportServicesChange}
          />
          <br />
<Button type="submit" size="lg" variant="primary">
  Update Babysitter</Button>
      
      <Button onClick={deleteBabysitterServices}>Delete Babysitter</Button>
      </Form>
      </Container>  
          </div>
  );
}

export default EditBabysitterPage;
