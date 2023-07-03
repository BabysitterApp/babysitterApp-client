import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import teilzeit from "../Images/babysitter/babysitter-teilzeit-662x331.jpg";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <h1>Welcome to LittleLuvSitters </h1>
        <img src={teilzeit} alt="playing blocks" rounded />
      </div>
    </div>
  );
}

export default HomePage;
