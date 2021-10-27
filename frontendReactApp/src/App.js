import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Nav from './Screens/01.Nav'
import About from './Screens/02.About'
import Skills from './Screens/03.Skills'
import Experiences from './Screens/04.Experiences'
import Contact from './Screens/06.Contact'
import Presentation from './Screens/07.Presentation'
import Info from './Screens/08.Info'



function App() {

  useEffect(() => {
    document.title = "Tony Candry - CV Développeur web junior";
  }, []);

  return (
    <div className='wholePage' style={{overflow:'hidden'}} >
      <Info />
      <Nav />
      <Presentation />
      <About />
      <Skills />
      <Experiences />
      <Contact />
    </div>


  );
}

export default App;
