import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
}
    from "react-accessible-accordion";


export default function Edu_info({ setToExpMode, setToGenMode , eduData }) {
    const [disableButtons, setDisableButtons] = useState(false);

    const handleEduChange = (event) => {
        const { school, value } = event.target;
        setEduData((prevEduData) => ({ ...prevEduData, [school]: value }));
    };

    const handleEduSubmit = (event) => {
        event.preventDefault();
        console.log(eduData);
    };

    const disablebtnstrue = () => {
        setDisableButtons(true);
    };

    const disablebtnsfalse = () => {
        setDisableButtons(false);
    };

    const setExpMode = () => {
        setToExpMode();
    }

    const setGenMode = () => {
        setToGenMode();
    }


    return (
        <>
            <div className="page">
                <img src="arrow-left.png" className="small-icon-arrow" alt="arrow-right" onClick={setGenMode} />

                <form onSubmit={handleEduSubmit}>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="title-bar">
                                        <label className="title">Educational Information</label>
                                        <img src="drop_down.png" className="small-icon" alt="drop_down" />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="inputValues">
                                    <label htmlFor="school">School/University:</label>
                                    <input type="text"
                                        id="school"
                                        name="school"
                                        value={eduData.school}
                                        onChange={handleEduChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="location">Location:</label>
                                    <input type="text"
                                        id="location"
                                        name="location"
                                        value={eduData.location}
                                        onChange={handleEduChange}
                                        disabled={disableButtons} />
                                </div>

                                <div className="inputValues">
                                    <label htmlFor="degree">Degree:</label>
                                    <input type="text"
                                        id="degree"
                                        name="degree"
                                        value={eduData.degree}
                                        onChange={handleEduChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="grad_date">Graduation Date:</label>
                                    <input type="text"
                                        id="grad_date"
                                        name="grad_date"
                                        value={eduData.grad_date}
                                        onChange={handleEduChange}
                                        disabled={disableButtons} />

                                </div>

                                <label htmlFor="spec">Specialization:</label>
                                <input type="text"
                                    id="spec"
                                    name="spec"
                                    value={eduData.spec}
                                    onChange={handleEduChange}
                                    disabled={disableButtons} />

                                <button onClick={disablebtnstrue} >Save Page </button>
                                <button onClick={disablebtnsfalse}>Edit Page</button>

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </form>
                <img src="arrow-right.png" className="small-icon-arrow" alt="arrow-right" onClick={setExpMode} />

            </div>
        </>
    )
}

