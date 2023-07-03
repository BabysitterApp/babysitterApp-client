import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth.context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import balloonHeart from "../Images/icon/balloon-heart.svg";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand">LittleLuvSitters</a>
        <Link to="/">
          <button>Home</button>
        </Link>
        {isLoggedIn && (
          <>
            <Link to="/babysitterServices">
              <button>Babysitters </button>
            </Link>

            <button onClick={logOutUser}>Logout</button>
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
