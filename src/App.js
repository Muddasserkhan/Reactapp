
// import style from './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramsEvent from './pages/ProgramsEvent';
import EventSingle from './pages/EventSingle';
import {eventData} from './EventData';
import Apidata from "./pages/Apidata";


function App() {
    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProgramsEvent eventData={eventData}/>} />
          <Route path="/event-single/:eventId" element={<EventSingle eventData={eventData}/>} />
          <Route path="/api-data" element={<Apidata/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
