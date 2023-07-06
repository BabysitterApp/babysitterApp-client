import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function BabysitterCard({
  babysitterName,
  aboutMe,
  supportServices,
  yearsOfExperience,
  languages,
  pricePerHour,
  _id,
}) {
  // return  <h1>  BabysitterCard  </h1>

  return (
    <div className="BabysitterCard card">
      <Link to={`/babysitterServices/${_id}`}>
        <h3>{babysitterName}</h3>
        <span>What services I can provide:</span>
        <p>{supportServices}</p>
        <span>Years of Experience:</span>
        <p>{yearsOfExperience}</p>
        <h4>Languages:</h4>
        <p>{languages}</p>
        <h4>Price per Hour:</h4>
        <p>{pricePerHour}</p>
        <p>Know something about me: {aboutMe} </p>
      </Link>
    </div>
  );
}

export default BabysitterCard;
