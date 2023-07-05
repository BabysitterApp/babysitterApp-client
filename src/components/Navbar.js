import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context";

import icon1 from "../Images/icon/icon1.png";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
      <img src={icon1} alt="icon" width ="6%" height = "6%" />
        <a class="navbar-brand">LittleLuvSitters</a>
        <Link to="/">
          <button>Home</button>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/babysitterServices">
              <button>Babysitters </button>
            </Link>
            <Link to="/">
            <button onClick={logOutUser}>Logout</button>
            </Link>

            
            <span>{user && user.name}</span>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Link to="/signup">
              {" "}
              <button>Sign Up</button>{" "}
            </Link>
            <Link to="/login">
              {" "}
              <button>Login</button>{" "}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
