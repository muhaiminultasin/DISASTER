import "./App.css";
import Button from "./Components/Common/Button/Button";
import Cross from "./Components/Common/Button/Cross";
import Card from "./Components/Common/Card/Card";
import Navbar from "./Components/Common/Navbar/Navbar";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Incidents from "./Components/Pages/Incidents/Incidents";
import Step3 from "./Components/Pages/Incidents/IncidentsStepTitle/Step3";
import Step1 from "./Components/Pages/Incidents/Step1";
import Step2 from "./Components/Pages/Incidents/Step2";

function App() {
  return (
    <>
        <Navbar/>
        <Step3/>
    </>
  );
}

export default App;
