import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Home from './pages/Home';
import Rules from './pages/Rules';
import EventDetail from './pages/Events';
import { Calendar, MapPin, Clock, ScrollText, Rocket, Code, Microscope as Microphone, Brain, Gamepad, Trophy, ArrowRight,User,Smile } from 'lucide-react';

const events = [
  {
    id: 1,
    name: "QUIZZARD",
    description: "Compete with your peers and win exciting prizes",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1000&q=80",
    user: "2",
    rule: "Written Prelims will be conducted",
    staff: "A Immaculate",
    student: "M Dhivakar, R Nandhini - II M.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 2,
    name: "Tech Talks",
    description: "Showcase your knowledge through Presentations",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Microphone className="w-8 h-8 text-purple-400" />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    user: "2",
    rule: "",
    Theme: "Applications of AI, Health Care, Business, Education, Science, IT etc..",
    staff: "B Manogaran",
    student: "Ranith Prawin, R Raja Perarasu - I M.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 3,
    name: "DEBOGAGE",
    description: "Debug Codes and Win Prizes",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    user: "2",
    rule: "Complete Under 60 minutes!",
    staff: "DR. Nithya",
    student: "S Naval Siddhu, M Chidambaram - III B.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 4,
    name: "T- HUNT",
    description: "Fun-filled Treasure Hunt inside our Campus",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Brain className="w-8 h-8 text-green-400" />,
    image: "https://images.unsplash.com/photo-1612257998531-70e0d0a15f6d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "5",
    rule: "Participants are not allowed to use mobile phones/any electronic devices. Participants should have knowledge of the places and structures inside the Campus.",
    staff: "N Deepa",
    student: "G Nivetha, G Prasanna - III B.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 5,
    name: "CONNECT- TECH",
    description: "Connect Right things with your Presence of Mind!",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Gamepad className="w-8 h-8 text-red-400" />,
    image: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "2",
    rule: "Written Prelims Will be Conducted, Finals will be on Stage",
    staff: "M Juliet Monalisa Esther",
    student: "D Naveen Kumar, V Deepak - III B.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 6,
    name: "ACT- OUT",
    description: "Showcase Your Acting Skills in front of our Panels",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    image: "https://plus.unsplash.com/premium_photo-1683219368353-6597c132c26f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "3",
    rule: "One person should give the gestures and the other two should guess the word",
    staff: "R Pavithra",
    student: "D Deepan Raj, V Srimathi - II B.Sc. CS",
    prize: "Certificate + Cash"
  },
  {
    id: 7,
    name: "HENNA-TATTOO",
    description: "Create stunning henna designs and showcase your artistic skills",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Smile className="w-8 h-8 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "2",
    rule: "Compete under 60 Minutes!",
    staff: "N Paviya Sree",
    student: "SK Kishika, T Mahaswetha - II B.Sc. CS",
    prize: "Certificate + Cash"
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home events={events}/>} />
          <Route path="/events/:eventId" element={<EventDetail events={events} />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;