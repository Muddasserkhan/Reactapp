
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programs_event from './pages/programs_event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Programs-event" element={<Programs_event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
