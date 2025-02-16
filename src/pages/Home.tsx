import React from 'react';
import { Calendar, MapPin, Clock, ScrollText, Rocket, Code, Microscope as Microphone, Brain, Gamepad, Trophy, ArrowRight,User,Smile } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import { Link } from 'react-router-dom';
import { Element } from "react-scroll";

const events = [
  {
    id: 1,
    name: "QUIZZARD",
    description: "Compete with your peers and win exciting prizes",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Code className="w-8 h-8 text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1000&q=80",
    user: "2",
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
    prize: "Certificate + Cash"
  },
  {
    id: 5,
    name: "CONNECT- TECH",
    description: "Connect Right things with you'r Presence of Mind!",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Gamepad className="w-8 h-8 text-red-400" />,
    image: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "2",
    prize: "Certificate + Cash"
  },
  {
    id: 6,
    name: "ACT- OUT",
    description: "Showcase Your Acting Skills infront of our Panels",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    image: "https://plus.unsplash.com/premium_photo-1683219368353-6597c132c26f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "3",
    prize: "Certificate + Cash"
  },
  {
    id: 7,
    name: "HENNA-TATTOO",
    description: " Create stunning henna designs and showcase your artistic skills",
    formLink: "https://forms.gle/LHacXmg53Wu9fF8F6",
    icon: <Smile className="w-8 h-8 text-yellow-400" />,
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "2",
    prize: "Certificate + Cash"
  }
];

const Home = () => {
  return (
    <div className="pt-0 md:pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white mt-2 md:mt-0">
  <div className="text-center space-y-4 md:space-y-8 p-8">
    {/* Mobile-specific layout */}
    <div className="md:hidden text-center">
  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)] uppercase tracking-wide">
    Kongunadu
  </h2>
  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)] uppercase tracking-wide">
    Arts and Science College
  </h2>
  <h2 className="text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)] uppercase tracking-wide">
    Department of Computer Science [SF]
  </h2>
  <h2 className="text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)] uppercase tracking-wide">
    Organizes
  </h2>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 whitespace-nowrap bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)]">
    InfoQuest ’25
  </h1>
</div>


    {/* Desktop layout (unchanged) */}
    <div className="hidden md:block">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)] uppercase tracking-wide">
        Department of Computer Science [SF] Organizes
      </h2>
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent [text-shadow:_0_0_30px_rgb(45_212_191_/_0.5),_0_0_60px_rgb(168_85_247_/_0.5),_0_0_80px_rgb(249_115_22_/_0.5)]">
        InfoQuest ’25
      </h1>
    </div>

    {/* Common content for both mobile and desktop */}
    <div className="flex flex-wrap justify-center gap-6 text-lg">
      <div className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-teal-500/20 backdrop-blur-sm border border-teal-500/20">
        <Calendar className="mr-2 text-teal-400" /> February 25, 2025
      </div>
      <div className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/20 backdrop-blur-sm border border-purple-500/20">
        <MapPin className="mr-2 text-purple-400" /> Main Auditorium
      </div>
      <div className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-500/20 backdrop-blur-sm border border-orange-500/20">
        <Clock className="mr-2 text-orange-400" /> 9:00 AM - 6:00 PM
      </div>
    </div>
    <CountdownTimer />
  </div>
</section>


      {/* Event Poster Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80" 
            alt="TechFest 2024 Poster"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Events Section */}
      <Element name="events">
      <section id="events"  className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-30 group-hover:opacity-20 transition-opacity duration-300">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                      {event.icon}
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="w-4 h-4 text-indigo-400" />
                      <span className="text-gray-300">{event.user}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{event.prize}</span>
                    </div>
                    <a 
                      href={event.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center px-6 py-2 rounded-lg overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 text-white transition-all duration-300 hover:from-indigo-500 hover:to-indigo-700"
                    >
                      <span className="relative z-10 flex items-center">
                        <span className="mr-2">Register</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Element>

      {/* Rules Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Rules & Regulations</h2>
          <p className="mb-8">Please review our event guidelines and participation rules before registering.</p>
          <Link 
            to="/rules"
            className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full hover:bg-white/20 transition"
          >
            <ScrollText className="mr-2" />
            View Complete Rules
          </Link>
        </div>
      </section>

      {/* Contact Preview */}
      <Element name="contact">
      <section className="py-16 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Event Coordinator</h3>
              <p>xxxxxx</p>
              <p>+91 00000000</p>
              <p>xxxx@kongunaducollege.ac.in</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Venue</h3>
              <p>Main Auditorium</p>
              <p>Kongunadu Arts & Science College</p>
              <p>3W5X+VFH, Udayampalayam Rd, Coimbatore, Tamil Nadu 641029</p>
            </div>
          </div>
        </div>
      </section>
      </Element>
    </div>
  );
};

export default Home;