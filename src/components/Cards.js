import { Card, Col, Row } from "react-bootstrap";
const Cards = () => {
  const cardInfo = [
    {
      image:
        "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg",
      title: "Julie",
      text: "Big heart for children | I myself have an adult son. I have a lot of fun with children, certificate references available",
    },
    {
      image:
        "https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=",
      title: "Olivia",
      text: "I am a responsible and fun loving babysitter with 7 years of childcare experience",
    },
    {
      image:
        "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
      title: "Grace",
      text: "Many years of experience in the care of twins from baby age, socio-educational individual case and family helper, tutor, parent work/counselling.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtePu0nzEqS_QQ6a9MgllNS6fNJH_-4uaGUnyrpdTaMgyh2k9ADStDOoHdu9m76NAlU_o&usqp=CAU",
      title: "Sandra",
      text: "Dear friends, I'm a state-approved & certified educator. For years I have been gaining experience in childcare, such as in kindergartens, in after-school care as well as in various babysitting jobs and private care for children of friends and family. ",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Col className="d-flex">
      <Card className="flex-fill" >
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
  };

  return (
    <div className="grid">      
      <Row lg={3}>{cardInfo.map(renderCard)}</Row>
    </div>
  );
};

export default Cards;
