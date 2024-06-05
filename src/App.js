import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Views/Contact';
import Home from './Views/Home';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
      {/* we use react router dom library for routing */}
      {/* on localhost:3000/home you will have the view for home page */}
      {/* on localhost:3000/contact you will have the view for contact page */}
      {/* you can rename the routes according to the requirenment */}
      <Router >
        <Navbar />
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          {/* * means when an usual route hit it will always take you on the home route */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
