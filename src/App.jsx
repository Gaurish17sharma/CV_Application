import { useState } from 'react'
import './Styles/App.css';
import Gen_info from './Components/Gen_info';
import Edu_info from "./Components/Edu_info";
import Exp_info from './Components/Exp_info';
import Skill_info from './Components/Skill_info';
import Display_info from './Components/Display_info';

function App() {
  const [mode, setMode] = useState("gen");

  function setToEduMode() {
    setMode("edu");
  }

  function setToExpMode() {
    setMode("exp");
  }

  function setToSklMode() {
    setMode("skl");
  }

  function setToDspMode() {
    setMode("dsp");
  }

  function setToGenMode() {
    setMode("gen");
  }

  return (
    <>
      <div className="Container">
        <h1>CV APPLICATION</h1>
        {mode == "gen" ? (
          <Gen_info setToEduMode={setToEduMode} />
        ) : mode == "edu" ? (
          <Edu_info setToExpMode={setToExpMode} setToGenMode={setToGenMode} />
        ) : mode == "exp" ? (
          <Exp_info setToSklMode={setToSklMode} setToEduMode = {setToEduMode}/>
        ) : mode == "skl" ? (
          <Skill_info setToDspMode={setToDspMode} setToExpMode = {setToExpMode}/>
        ) : (
          <Display_info />
        )}

      </div>
    </>
  )
}

export default App
