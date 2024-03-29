import { useState } from 'react'
import './Styles/App.css';
import Gen_info from './Components/Gen_info';
import Edu_info from "./Components/Edu_info";
import Exp_info from './Components/Exp_info';
import Skill_info from './Components/Skill_info';
import Display_info from './Components/Display_info';
import Styling from './Components/Styling';

function App() {
  const [mode, setMode] = useState("gen");
  const [formData, setFormData] = useState({ name: "", email: "", phno: "", location: "", github: "" });
  const [eduData, setEduData] = useState({ school: "", location: "", degree: "", grad_date: "", spec: "" });
  const [expData, setexpData] = useState({ c_name: "", location: "", st_dt: "", ed_dt: "", jb_title: "", jb_desc: "" });
  const [skillData, setskillData] = useState({ skill_gp_name: "", skills: "" });
  const [style, setStyle] = useState("Harvard");

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

  function setToStyleMode() {
    setMode("style");
  }

  return (
    <>
      <div className="Container">
        <h1>CV APPLICATION</h1>
        {mode == "gen" ? (
          <Gen_info setToEduMode={setToEduMode}
            formData={formData}
            setFormData={setFormData}
          />
        ) : mode == "edu" ? (
          <Edu_info setToExpMode={setToExpMode}
            setToGenMode={setToGenMode}
            eduData={eduData}
            setEduData={setEduData}
          />
        ) : mode == "exp" ? (
          <Exp_info setToSklMode={setToSklMode}
            setToEduMode={setToEduMode}
            expData={expData}
            setexpData={setexpData}
          />
        ) : mode == "skl" ? (
          <Skill_info setToStyleMode={setToStyleMode}
            setToExpMode={setToExpMode}
            skillData={skillData}
            setskillData={setskillData}
          />
        ) : mode == "style" ? (
          <Styling setToDspMode={setToDspMode}
            setToSklMode={setToSklMode}
            style={style}
            setStyle={setStyle}
          />
        ) : (
          <Display_info formData={formData}
            eduData={eduData}
            expData={expData}
            skillData={skillData}
          />
        )}

      </div>
    </>
  )
}

export default App
