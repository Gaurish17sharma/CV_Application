import { useState } from "react";
import './Gen_info.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
}
    from "react-accessible-accordion";

export default function Multiple({ setToEduMode , formData}) {
    const [disableButtons, setDisableButtons] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleGenSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const disablebtnstrue = () => {
        setDisableButtons(true);
    };

    const disablebtnsfalse = () => {
        setDisableButtons(false);
    };


    return (
        <>
            <div className="page">
                <form onSubmit={handleGenSubmit}>
                    <Accordion allowZeroExpanded>
                        <AccordionItem>

                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="title-bar">
                                        <label className="title">General Information</label>
                                        <img src="drop_down.png" className="small-icon" alt="drop_down" />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <div className="inputValues">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="email">Email:</label>
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={disableButtons} />

                                </div>

                                <div className="inputValues">
                                    <label htmlFor="phno">Phone Number:</label>
                                    <input type="number"
                                        id="phno"
                                        name="phno"
                                        value={formData.phno}
                                        onChange={handleChange}
                                        disabled={disableButtons} />

                                    <label htmlFor="location">Location:</label>
                                    <input type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        disabled={disableButtons} />

                                </div>

                                <label htmlFor="github">Github:</label>
                                <input type="text"
                                    id="github"
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    disabled={disableButtons} />

                                <button onClick={disablebtnstrue} >Save Page </button>
                                <button onClick={disablebtnsfalse}>Edit Page</button>

                            </AccordionItemPanel>

                        </AccordionItem>
                    </Accordion>
                </form>
                <img src="arrow-right.png" className="small-icon-arrow" alt="arrow-right" onClick={() => { setToEduMode() }}/>

            </div>

        </>
    );
}









