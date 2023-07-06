import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Navbar as BootstrapNavbar,
  Nav as BootstrapNav,
  Button,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import icon1 from "../Images/icon/icon1.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <BootstrapNavbar
      bg="light"
      variant="light"
      className="justify-content-evenly"
      expand="lg"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <Image src={icon1} alt="icon" width="6%" height="6%" />
          LittleLuvSitters
        </BootstrapNavbar.Brand>
        <BootstrapNav>
          {/* <NavLink to="/" activeClassName="active">
            Home
          </NavLink> */}
          {isLoggedIn && (
            <>
              <NavLink to="/babysitterServices" activeClassName="active">
                Babysitters
              </NavLink>
              <NavLink to="/" onClick={logOutUser}>
                <Button>Logout</Button>
              </NavLink>
              <span>{user && user.name}</span>
            </>
          )}
          {!isLoggedIn && (
            <BootstrapNav>
              <NavLink to="/signup" activeClassName="active">
                <Button>Register</Button>
              </NavLink>{" "}
              {"  "}
              <NavLink to="/login" activeClassName="active">
                <Button>Login</Button>
              </NavLink>
            </BootstrapNav>
          )}
        </BootstrapNav>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
