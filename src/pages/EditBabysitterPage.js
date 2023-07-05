
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


//const REACT_APP_SERVER_URL = "http://localhost:5005";

function EditBabysitterPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  

  const {babysitterServicesId } = useParams();   
  const navigate = useNavigate();
  
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
        setTitle(oneBabysitterServices.title);
        setDescription(oneBabysitterServices.description);
      })
      .catch((error) => console.log(error));
    
  }, [babysitterServicesId]);

  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };
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
        navigate(`/babysitterServices/${babysitterServicesId}`)
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

      <form onSubmit={handleFormSubmit}>  
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

<button type="submit">Update Babysitter</button>
      </form>
      <button onClick={deleteBabysitterServices}>Delete Babysitter</button>
    </div>
  );
}

export default EditBabysitterPage;
