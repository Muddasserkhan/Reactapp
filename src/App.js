
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramsEvent from './pages/ProgramsEvent';
import EventSingle from './pages/EventSingle';
import {eventData} from './EventData';


function App() {
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProgramsEvent eventData={eventData}/>} />
          <Route path="/event-single/:eventId" element={<EventSingle eventData={eventData}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
