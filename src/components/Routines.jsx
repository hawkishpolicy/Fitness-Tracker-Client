import React, { useState, useEffect} from "react";
import { getPublicRoutinesCall } from "../API-Adapter";

const Routines = () => {
    const [routines,setRoutines] = useState([])
    // const routine = props.routines
    // const setRoutine = props.setRoutines
    // const idx = props.idx

    
    const getPublicRoutines = async () => {
        const publicRoutines = await getPublicRoutinesCall()
        setRoutines(publicRoutines)
        console.log("Public Routines", publicRoutines)
    }
    
    
    useEffect(()=>{
        getPublicRoutines()
    }, [])

    
    try {
        
    } catch (error) {
        console.error(error)
    }

    return(
        <div >
        {routines.map((routine, idx) => {
            return (
                <div id="routineCard" key={idx}>
                    <h2 className="title">{routine.name}</h2>
                    <li>Creator Name: {routine.creatorName}</li>
                    <li>Goal: {routine.goal}</li>
                    <li>test: {routine.activities.name}</li>
                
                </div>
                )}
                )}
            </div>

    )
            }

export default Routines