
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgramsEvent from './pages/ProgramsEvent';
import EventSingle from './pages/EventSingle';


const eventData = [
  {
      id:1,
      date:'12',
      month:'April',
      year:'2023',
      event_title:'Experts Collaborations',
      event_description:'With supporting text below as a natural lead-in to additional content. sWith supporting text below as a natural lead-in to additional content.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },

  {
      id:2,
      date:'16',
      month:'April',
      year:'2023',
      event_title:'How to be Freelance Specialists Planner',
      event_description:'Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },

  {
      id:3,
      date:'19',
      month:'April',
      year:'2023',
      event_title:'How to Survive and Thrive as a Freelancer',
      event_description:'Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },

  {
      id:4,
      date:'23',
      month:'April',
      year:'2023',
      event_title:'Career: How Can I Become a Freelancer',
      event_description:'Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },

  {
      id:5,
      date:'25',
      month:'April',
      year:'2023',
      event_title:'Experts Collaborations',
      event_description:'Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },

  {
      id:6,
      date:'26',
      month:'April',
      year:'2023',
      event_title:'How to be Freelance Specialists Planner',
      event_description:'Duis autem vel eum iriure dolor in hendrerit in vulputate velitesse molestie consequat, vel illum dolore eu feugiat. nulla facilisis at vero eros et accumsan.',
      location:'Gonaomanan Street 229, California',
      view_map:[
          {
              text:'view map',
              link:'/veiw-map'
          }
      ],
      event_btn:[
          {
              text:'Join This Event',
              link:'/al'
          }
      ],
      image:'/images/Place your image here.png',
  },
]

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
