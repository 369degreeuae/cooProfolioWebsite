import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import GetinTouch from "./components/GetinTouch.jsx";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import EducationSection from "./components/EducationSection.jsx";
import Landing from "./components/Landing.jsx";
import "./App.css";

function App() {

  return (
    <>
      <div className="max-w-fit bg-gray-50 mt-[-38px]">  
    <Navbar id={"top"}/>
        <main className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Landing id={"landing"}/>
          <Timeline id="timeline" />
          <EducationSection/>
          <Services id="services" />
          <GetinTouch id="getintouchcontact" />

        </main>
      </div>
    </>
  );
}

export default App;
