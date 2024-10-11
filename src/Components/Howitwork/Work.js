import React from "react";
import styles from "./Work.module.css";
import WorkCard from "./WorkCard";
import step1 from "../../assets/howItWork1.png";
import step2 from "../../assets/howitWork2.png";
import step3 from "../../assets/howItWork3.png";
const Work = () =>{
    const cardContent = [
        {
            id : 1,
            step : "STEP 1",
            heading : "Upload your file",
            description : "Select or drop the files using the Upload File button. It can be a scanned/non-scanned image or a PDF file. Once uploaded the software would take a few seconds to process the file. After getting processed, move forward to the next step.",
            src : step2
        },
        {
            id : 2,
            step : "STEP 2",
            heading : "Edit & Review",
            description : "Select or drop the files using the Upload File button. It can be a scanned/non-scanned image or a PDF file. Once uploaded the software would take a few seconds to process the file. After getting processed, move forward to the next step.",
            src : step1
        },
        {
            id : 3,
            step : "STEP 3",
            heading : "Convert & Download",
            description : "Select or drop the files using the Upload File button. It can be a scanned/non-scanned image or a PDF file. Once uploaded the software would take a few seconds to process the file. After getting processed, move forward to the next step.",
            src : step3
        },
    ]
    return(
        <div>
            <h1 className={styles.sectionHeading}>How it works? </h1>
            <div className={styles.row}>
                {cardContent.map(card => <WorkCard 
                step = {card.step}
                heading = {card.heading}
                image = {card.src}
                description = {card.description}
                />)}
            </div>
        </div>
    )
}
export default Work;