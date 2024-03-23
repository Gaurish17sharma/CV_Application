import "./Styling.css";

export default function Styling({ style, setStyle, setToDspMode, setToSklMode }) {
    const setSklMode = () => {
        setToSklMode();
    }

    const setDspMode = () => {
        setToDspMode();
    }

    return (
        <>

            <div className="styling">
                <img src="arrow-left.png" className="small-icon-arrow" alt="arrow-right" onClick={setSklMode} />
                <div>
                    <div className="template">Change Style Template</div>
                    <button
                        className={style === "Harvard" ? "selected" : ""}
                        onClick={() => setStyle("Harvard")}
                    >
                        Harvard
                    </button>
                    <button
                        className={style === "Modern" ? "selected" : ""}
                        onClick={() => setStyle("Modern")}
                    >
                        Modern
                    </button>
                </div>
                <img src="arrow-right.png" className="small-icon-arrow" alt="arrow-right" onClick={setDspMode} />
            </div>
        </>
    );
}