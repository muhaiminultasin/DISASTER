import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Common/Navbar/Navbar";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Incidents from "./Components/Pages/Incidents/Incidents";
import Location from "./Components/Pages/Locations/Location";
import Step1 from "../src/Components/Pages/Incidents/Step1";
import Step2 from "../src/Components/Pages/Incidents/Step2";
import Step3 from "../src/Components/Pages/Incidents/IncidentsStepTitle/Step3";
import LastStep from "./Components/Pages/Incidents/LastStep";
import Menu from "./Components/Common/MobileMenu/Menu";

function App() {
  return (
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/Incidents" element={<Incidents/>}/>
         <Route path="/Location" element={<Location/>}/>
         <Route path="/new-incident" element={<Step1/>}/>
         <Route path="/describe-sec" element={<Step2/>}/>
         <Route path="/add-incident-title" element={<Step3/>}/>
         <Route path="/save-incident" element={<LastStep/>}/>
         <Route path="/Menu" element={<Menu/>} />
       </Routes>
     </BrowserRouter>
    // <Menu />
  );
}

export default App;
