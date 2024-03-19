import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
}
    from "react-accessible-accordion";

export default function Exp_info({ setToSklMode, setToEduMode }) {
    const [expData, setexpData] = useState({ c_name: "", location: "", st_dt: "", ed_dt: "", jb_title: "", jb_desc: "" });
    const [disableButtons, setDisableButtons] = useState(false);

    const handleExpChange = (event) => {
        const { c_name, value } = event.target;
        setexpData((prevexpData) => ({ ...prevexpData, [c_name]: value }));
    };

    const handleExpSubmit = (event) => {
        event.preventDefault();
        console.log(expData);
    };

    const setSklMode = () => {
        setToSklMode();
    }

    const setEduMode = () => {
        setToEduMode();
    }

    const disablebtnstrue = () => {
        setDisableButtons(true);
    };

    const disablebtnsfalse = () => {
        setDisableButtons(false);
    };

    return (
        <>
            <div className="page">
                <img src="arrow-left.png" className="small-icon-arrow" alt="arrow-right" onClick={setEduMode} />
                <form onSubmit={handleExpSubmit}>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="title-bar">
                                        <label className="title">Experience Information</label>
                                        <img src="drop_down.png" className="small-icon" alt="drop_down" />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="inputValues">
                                    <label htmlFor="c_name">Company/Firm Name:</label>
                                    <input type="text"
                                        id="c_name"
                                        name="c_name"
                                        value={expData.c_name}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="location">Location:</label>
                                    <input type="text"
                                        id="location"
                                        name="location"
                                        value={expData.location}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />
                                </div>

                                <div className="inputValues">
                                    <label htmlFor="st_dt">Start Date:</label>
                                    <input type="text"
                                        id="st_dt"
                                        name="st_dt"
                                        value={expData.st_dt}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="ed_dt">End Date(Presently Working):</label>
                                    <input type="text"
                                        id="ed_dt"
                                        name="ed_dt"
                                        value={expData.ed_dt}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />

                                </div>

                                <div className="inputValues">
                                    <label htmlFor="jb_title">Job Title:</label>
                                    <input type="text"
                                        id="jb_title"
                                        name="jb_title"
                                        value={expData.jb_title}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="jb_desc">Job Description:</label>
                                    <input type="textbox"
                                        id="jb_desc"
                                        name="jb_desc"
                                        value={expData.jb_desc}
                                        onChange={handleExpChange}
                                        disabled={disableButtons} />

                                </div>

                                <button onClick={disablebtnstrue} >Save Page </button>
                                <button onClick={disablebtnsfalse}>Edit Page</button>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </form>
                <img src="arrow-right.png" className="small-icon-arrow" alt="arrow-right" onClick={setSklMode} />

            </div>
        </>
    )
}