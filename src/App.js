import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/notes/noteState"; // Import NoteState correctly
import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Notes from "./Components/Notes";

function App() {
  return (
    <NoteState> 
      <Router>
        <div>
          
          <Routes>
            <Route path="/" element={
             <><Navbar/>
             <Home /></> } />
            <Route path="/signup" element={<><Navbar/>
              <Signup/></>} />
            <Route path="/login" element={<><Navbar/>
              <Login/></>} />
            <Route path="/notes" element={<Notes/>} />
          </Routes>
          {/* Footer will be rendered globally */}
          <Footer />
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
