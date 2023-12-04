
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramsEvent from './pages/ProgramsEvent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Programs-event" element={<ProgramsEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
