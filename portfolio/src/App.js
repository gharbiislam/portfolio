import { Contact } from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="dark">
     <Navbar/>
     <Home/>
     <Services/>
     <Contact/>
    </div>
  );
}

export default App;
