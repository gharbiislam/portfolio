import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import Services from "./components/Services";

function App() {
  const [isDarkMode, setIsDarkMode]= useState(false);

  useEffect(()=>{
    if(localStorage.theme==='dark'|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
       localStorage.theme='';
    }
  },[isDarkMode])
  return (
    <div >
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Home isDarkMode={isDarkMode}/>
     <Services isDarkMode={isDarkMode}/>
     <Projects isDarkMode={isDarkMode}/>
     <Contact isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
