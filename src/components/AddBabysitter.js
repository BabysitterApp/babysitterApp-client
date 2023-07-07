import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button, Form } from "react-bootstrap";
import Select from "react-select";

//was const API_URL = "http://localhost:5005";

function AddBabysitter() {
  const [babysitterName, setBabysitterName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [languages, setLanguages] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [provideServiceFor, setProvideServiceFor] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [supportServices, setSupportServices] = useState("");

  const [babysitterService, setBabysitterService] = useState(null);

  const { babysitterServicesId } = useParams();

  const handleLanguagesChange = (selectedOptions) => {
    setLanguages(selectedOptions);
  };

  const handleProvideServiceForChange = (selectedOptions) => {
    setProvideServiceFor(selectedOptions);
  };

  const handleSupportServicesChange = (selectedOptions) => {
    setSupportServices(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { babysitterServiceId } = props;
    const requestBody = {
      babysitterName,
      aboutMe,
      languages,
      supportServices,
      yearsOfExperience,
      provideServiceFor,
      pricePerHour
      // babysitterServiceId,
    };

    const storedToken = localStorage.getItem("authToken");

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
      <h2>Add a Babysitter Profile</h2>
      <Container>
        <Form onSubmit={handleSubmit}>
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
            Submit
          </Button>
          <Link to="/babysitterServices" activeClassName="active">
            <Button size="lg" variant="secondary">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}

export default AddBabysitter;
