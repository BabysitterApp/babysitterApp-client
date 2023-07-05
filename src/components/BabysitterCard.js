import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function BabysitterCard({ title, description, _id }) {

  return  <h1>  BabysitterCard  </h1>

  // return (
  //   <div className="BabysitterCard card">
  //     <Link to={`/babysitterServices/${_id}`}>
  //       <h3>{babysitterName}</h3>
  //       <h4>A little about me:</h4>
  //       <p>{aboutMe}</p>
  //       <h4>What services I can provide:</h4>
  //       <p>{supportServices}</p>
  //       <h4>Years of Experience:</h4>
  //       <p>{yearsOfExperience}</p>
  //       <h4>Languages:</h4>
  //       <p>{languages}</p>
  //       <h4>Price per Hour:</h4>
  //       <p>{pricePerHour}</p>
  //     </Link>
  //     <p style={{ maxWidth: "400px" }}>{description} </p>
  //   </div>
  // );
}

export default BabysitterCard;
