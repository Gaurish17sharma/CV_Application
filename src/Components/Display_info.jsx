import './Display.css';

export default function Display({ formData, eduData, expData, skillData }) {
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
                <h2>Education</h2>
                <section>
                    <div className="education-section">
                        <div className="education-left">
                            <h4>
                                {eduData.grad_date}
                            </h4>
                            <h4>{eduData.location}</h4>
                        </div>
                        <div className="education-right">
                            <h4 className="output-bold">{eduData.school}</h4>
                            <h4>{eduData.degree}</h4>
                        </div>
                    </div>
                </section>
                <h2>Professional Experience</h2>
                <section>
                    <div className="experience-section">
                        <div className="experience-left">
                            <h4>
                                {expData.st_dt} {expData.ed_dt ? "-" : ""} {expData.ed_dt}
                            </h4>
                            <h4>{expData.location}</h4>
                        </div>
                        <div className="experience-right">
                            <h4 className="output-bold">{expData.c_name}</h4>
                            <h4>{expData.jb_title}</h4>
                            <p>{expData.jb_desc}</p>
                        </div>
                    </div>
                </section>
                <h2>Skill Slot</h2>
                <section>
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
                </section>
            </div>
        </div>
    )
}