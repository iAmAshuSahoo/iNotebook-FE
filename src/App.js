import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState'
import Login from './components/Login';
import Signup from './components/Signup';
import AlertState from './context/alerts/AlertState';

function App() {

  return (
    <>
      <AlertState>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/login" exact element={<Login />}></Route>
              <Route path="/signup" exact element={<Signup />}></Route>
              <Route path="/about" exact element={<About />}></Route>
              {/* <Route path="/about" exact element={<About />}></Route> */}
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
      </AlertState>
    </>
  );
}

export default App;
