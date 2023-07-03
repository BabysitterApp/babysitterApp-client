import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
//import BabysitterListPage from "./pages/BabysitterListPage";
import Navbar from "./components/Navbar";    
import HomePage from "./pages/HomePage"; 
//import BabysitterDetailsPage from "./pages/BabysitterDetailsPage"; 
//import EditBabysitterPage from "./pages/EditBabysitterPage ";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage"; 
import { Container, Row, Col} from 'react-bootstrap';
import BabysitterCard from './components/BabysitterCard';
import BookingCard from './components/BookingCard';
import babysitters from './data.json';






function App() {
  return (
    <div className="App">
        {/* <header className="App-header">
        Babysitter App
    </header> */}
    <Navbar />
    <Routes>      
        <Route path="/" element={ <HomePage /> } />
        {/* <Route path="/babysitterServices" element={ <BabysitterDetailsPage /> } /> */}
        {/* <Route path="/babysitterServices" element={ <BabysitterListPage /> } /> */}
        {/* <Route path="/babysitterServices/edit" element={ <EditBabysitterPage /> } /> */}
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        </Routes>
        <Container>
          <Row>
          {babysitters}
            <BabysitterCard />
            <BookingCard />
          </Row>
        </Container>
    </div>
  );
}

export default App;
