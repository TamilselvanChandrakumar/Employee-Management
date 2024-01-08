import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection/MainSection";
import LeftNav from "./components/leftnav/LeftNav";

function App() {
  const [employeeById, setEmployeeById] = useState("");
  return (
    <div className="container">
      <LeftNav employeeById={employeeById}></LeftNav>
      <MainSection setEmployeeById={setEmployeeById}></MainSection>
    </div>
  );
}

export default App;
