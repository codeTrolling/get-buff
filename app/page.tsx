'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";

export default function Home() {
  const data = "Hard";
  // used for smooth drop of the exercise window for additional info when clicked
  const exerciseRef = useRef([]);

  const exampleValues = [
    {
      id: "1",
      name: "Pull-up",
      difficulty: "Hard",
      muscleGroups: ["biceps", "lats", "forearms"]
    }
]

  //const muscleGroups = ["biceps", "lats", "forearms"]

  const SaveExercise = (id: string): void => {
    // use local storage to save the exercise' id
  }

  return (
    <>
    <div className={styles.exercisesContainer + " flex-column"}>
      {
        exampleValues.map((item, index) => 
        <div className={styles.exercise} key={index}>
        <div className={styles.exerciseFirstRow + " flex"}>
          <label className={styles.firstRowInfo}>{item.name}</label>

          <label className={styles.firstRowInfo + " flex"}>Difficulty:  
           <label style={{color: item.difficulty == "Hard" ? "red" : "green", marginLeft: "10px"}}>{item.difficulty}</label>
           <img src="" alt="" className={styles.img} />
          </label>
          
          <img src="" alt="" className={styles.img} onClick={() => SaveExercise("1")}/>
        </div>

        <div className={"flex"}>
          <label style={{marginLeft: "10px", fontSize: "1.1rem"}}>Muscle groups:</label>
          {
            item.muscleGroups.map((innerItem, innerIndex) => <label className={styles.muscleGroup} key={innerIndex}>{innerItem}</label>)
          }
        </div>

      </div>
        )
      }
      {/* <div className={styles.exercise}>
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

      </div> */}
    </div>
    </>
  );
}
