'use client'

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const data = "Hard";

  const muscleGroups = ["biceps", "lats", "forearms"]

  const SaveExercise = (id: string): void => {
    // use local storage to save the exercise' id
  }

  return (
    <>
    <div className={styles.exercisesContainer + " flex-column"}>
      <div className={styles.exercise}>
        <div className={styles.exerciseFirstRow + " flex"}>
          <label className={styles.firstRowInfo}>Push-ups</label>

          <label className={styles.firstRowInfo + " flex"}>Difficulty:  
           <label style={{color: data == "Hard" ? "red" : "green", marginLeft: "10px"}}>{" " + data}</label>
           <img src="" alt="" className={styles.img} />
          </label>
          
          <img src="" alt="" className={styles.img} onClick={() => SaveExercise("1")}/>
        </div>

        <div className={"flex"}>
          <label style={{marginLeft: "10px", fontSize: "1.1rem"}}>Muscle groups:</label>
          {
            muscleGroups.map((item, index) => <label className={styles.muscleGroup}>{item}</label>)
          }
        </div>

      </div>
    </div>
    </>
  );
}
