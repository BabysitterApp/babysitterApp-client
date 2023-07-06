import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        console.log(response);

        storeToken(response.data.authToken);
        authenticateUser();

        navigate("/");
      })
      .catch((error) => {
        console.log("There is Login error");
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h2>Log into your account</h2>

      <Form onSubmit={handleLoginSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmail}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </FloatingLabel>

        {/* <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
        
        /> */}

        <Button
          variant="primary"
          // style={{ backgroundColor: "pink", color: "white" }}
          size="lg"
          type="submit"
          block
          Link
          to={"/login"}
        >
          Login
        </Button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
<<<<<<< HEAD

=======
>>>>>>> e1dbbb799d353b827cf5fee001a899a8297d5977
        <p>Don't have an account yet?</p>
        <Button variant="secondary" text="muted" Link to={"/signup"}>
          {" "}
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
export default LoginPage;
