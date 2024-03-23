import './Display.css';

export default function Display({ formData, eduData, expData, skillData, style }) {
    return (style === "Harvard" ?
        <Harvard formData={formData} eduData={eduData} expData={expData} skillData={skillData} />
        : <Modern formData={formData} eduData={eduData} expData={expData} skillData={skillData} />
    );
}

function Harvard({ eduData, expData, eduData, skillData }) {
    return (
        <div className="output-container harvard">
            <section>
                <h1 className="name">{formData.name}</h1>
                <div className="additional-details-harvard">
                    <h3>{formData.address}</h3> | <h3>{formData.phone}</h3> |{" "}
                    <h3>{formData.email}</h3>
                </div>
            </section>
            <div className="cv-content">
                <h2>Education</h2>
                <section>
                    {eduData.map((edu) => (
                        <div className="eduData-section harvard" key={edu.id}>
                            <div className="eduData-harvard">
                                <h4 className="output-bold harvard">{eduData.school}</h4>
                                <h4>
                                    {eduData.grad_date}
                                </h4>
                            </div>
                            <h4>{eduData.degree}</h4>
                            <h4>{eduData.spec}</h4>
                        </div>
                    ))}
                </section>
                <h2>PROFESSIONAL EXPERIENCE</h2>
                <section>
                    {expData.map((exp) => (
                        <div className="expData-section harvard" key={exp.id}>
                            <div className="expData-harvard">
                                <h4 className="output-bold harvard">{expData.c_name}</h4>
                                <h4>
                                    {expData.st_dt} {expData.ed_dt ? "-" : ""} {expData.ed_dt}
                                </h4>
                            </div>
                            <h4 className="position-harvard">{expData.jb_title}</h4>
                            <p>{expData.jb_desc}</p>
                        </div>
                    ))}
                </section>
                <h2>Skill Slot</h2>
                <section>
                    {skillData.map((skill) => (
                        <div className="skill-section">
                        <div className="skill-left">
                            <h4>
                                {skillData.skill_gp_name}
                            </h4>
                        </div>
                        <div className="skill-right">
                            {skillData.skills}
                        </div>
                    </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

function Modern({ eduData, expData, eduData, skillData }) {
    return (
        <div className="output-container">
        <section className="header">
            <h1 className="name">{formData.name}</h1>
            <div className="additional-details">
                <h3>{formData.email}</h3>
                <h3>{formData.phno}</h3>
                <h3>{formData.location}</h3>
                <h3>{formData.github}</h3>
            </div>
        </section>
        <div className="cv-content">
            <h2>eduData</h2>
            <section>
                {eduData.map((edu) => (
                    <div className="eduData-section">
                    <div className="eduData-left">
                        <h4>
                            {eduData.grad_date}
                        </h4>
                        <h4>{eduData.location}</h4>
                    </div>
                    <div className="eduData-right">
                        <h4 className="output-bold">{eduData.school}</h4>
                        <h4>{eduData.degree}</h4>
                        <h4>{eduData.spec}</h4>
                    </div>
                </div>
                ))}
            </section>
            <h2>Professional expData</h2>
            <section>
                {expData.map((exp) => (
                    <div className="expData-section">
                    <div className="expData-left">
                        <h4>
                            {expData.st_dt} {expData.ed_dt ? "-" : ""} {expData.ed_dt}
                        </h4>
                        <h4>{expData.location}</h4>
                    </div>
                    <div className="expData-right">
                        <h4 className="output-bold">{expData.c_name}</h4>
                        <h4>{expData.jb_title}</h4>
                        <p>{expData.jb_desc}</p>
                    </div>
                </div>
                ))}
            </section>
            <h2>Skill Slot</h2>
            <section>
                {skillData.map((skill) =>(
                    <div className="skill-section">
                    <div className="skill-left">
                        <h4>
                            {skillData.skill_gp_name}
                        </h4>
                    </div>
                    <div className="skill-right">
                        {skillData.skills}
                    </div>
                </div>
                ))}
            </section>
        </div>
    </div>
    );
}