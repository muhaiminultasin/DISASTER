import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Incidents from "./Components/Pages/Incidents/Incidents";
import Location from "./Components/Pages/Locations/Location";


function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Incidents" element={<Incidents/>}/>
        <Route path="/Location" element={<Location/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
