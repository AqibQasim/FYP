import React from "react";
import styles from "./Work.module.css";
import step1 from "../../assets/howItWork1.png";

const WorkCard = (props) =>{
    return(
        <div className={styles.column}>
    <div className={styles.card}>
        <div className={styles.headerWithIcon}>
            <div className={styles.header}>
                <span>{props.step}</span>
                <h1>{props.heading}</h1>
            </div>
            <div className={styles.icon}>
                <img src={props.image} alt="Upload Icon" /> {/* Adjust the path as needed */}
            </div>
        </div>
        <div className={styles.body}>
            <p>{props.description}</p>
        </div>
    </div>
</div>

    )
}
export default WorkCard;