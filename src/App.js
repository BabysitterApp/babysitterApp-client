import "./App.css";

import { Routes, Route } from "react-router-dom";
import BabysitterDirectoryPage from "./pages/BabysitterDirectoryPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
//import BabysitterDetailsPage from "./pages/BabysitterDetailsPage";
import EditBabysitterPage from "./pages/EditBabysitterPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import BabysitterCard from "./components/BabysitterCard";
import BookingCard from "./components/BookingCard";
//import babysitters from "./data.json";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        Babysitter App
    </header> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/babysitterServices/:babysitterServicesId" element={ <BabysitterDetailsPage /> } /> */}
        <Route path="/babysitterServices" element={ <BabysitterDirectoryPage /> } />
        <Route path="/babysitterServices/edit/:babysitterServicesId" element={ <EditBabysitterPage /> } />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
       
      </Routes>

      {/* {babysitters} */}
 
     {/* <BabysitterCard />
      <BookingCard /> */}
    </div>
  );
}

export default App;
