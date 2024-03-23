import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
}
    from "react-accessible-accordion";


export default function Skill_info({ setToDspMode, setToExpMode, skillData}) {
    const [disableButtons, setDisableButtons] = useState(false);

    const handleSkillChange = (event) => {
        const { skill_gp_name, value } = event.target;
        setskillData((prevskillData) => ({ ...prevskillData, [skill_gp_name]: value }));
    };

    const handleSkillSubmit = (event) => {
        event.preventDefault();
        console.log(skillData);
    };


    const disablebtnstrue = () => {
        setDisableButtons(true);
    };

    const disablebtnsfalse = () => {
        setDisableButtons(false);
    };

    const setDspMode = () => {
        setToDspMode();
    }

    const setExpMode = () => {
        setToExpMode();
    }

    return (
        <>
            <div className="page">
            <img src="arrow-left.png" className="small-icon-arrow" alt="arrow-right" onClick={setExpMode} />
                <form onSubmit={handleSkillSubmit}>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="title-bar">
                                        <label className="title">Skill Information</label>
                                        <img src="drop_down.png" className="small-icon" alt="drop_down" />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="inputValues">
                                    <label htmlFor="skill_gp_name">Skill Group Name:</label>
                                    <input type="text"
                                        id="skill_gp_name"
                                        name="skill_gp_name"
                                        value={skillData.skill_gp_name}
                                        onChange={handleSkillChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="skills">Skills:</label>
                                    <input type="text"
                                        id="skills"
                                        name="skills"
                                        value={skillData.skills}
                                        onChange={handleSkillChange}
                                        disabled={disableButtons} />
                                </div>

                                <button onClick={disablebtnstrue} >Save Page </button>
                                <button onClick={disablebtnsfalse}>Edit Page</button>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </form>
                <img src="arrow-right.png" className="small-icon-arrow" alt="arrow-right" onClick={setDspMode} />

            </div>
        </>
    )
}