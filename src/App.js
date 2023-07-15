
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home"
import MentorFill from './Components/Mentor fill/MentorFill';
import Mentor from "./Components/Mentor/Mentor"
import Mentor2Fill from './Components/Mentor2 fill/Mentor2Fill';
import Mentor2 from './Components/Mentor2/Mentor2';
import Mentor3 from './Components/Mentor3/Mentor3';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path="mentor" element={<Mentor/>}/>
          <Route path="mentorfill" element={<MentorFill/>}/>
          <Route path="mentor2" element={<Mentor2/>}/>
          <Route path="mentor2fill" element={<Mentor2Fill/>}/>
          <Route path="mentor3" element={<Mentor3/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
