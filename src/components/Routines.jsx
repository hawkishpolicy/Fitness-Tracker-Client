import React, { useState, useEffect} from "react";
import { RoutineCard } from "./"
import { getPublicRoutinesCall } from "../API-Adapter";

const Routines = () => {
    const [routines,setRoutines] = useState([])
    const [showUserRoutines, setShowUserRoutines] = useState(false)

    
    const getPublicRoutines = async () => {
        const publicRoutines = await getPublicRoutinesCall()
        setRoutines(publicRoutines)
        console.log("Public Routines", publicRoutines)
    }
    
    
    useEffect(()=>{
        getPublicRoutines()
    }, [])

    
    return (

        <div id="basicPage">
             <div id="myRoutinesDisplay">

            {routines.length ? routines.map((routine, idx) => {

                    return(<RoutineCard key={"allPublicRoutines idx: " + idx} routine={routine} setRoutines={setRoutines} showUserRoutines={showUserRoutines} setShowUserRoutines={setShowUserRoutines}></RoutineCard>)

                }) : <div className="loader"></div>
            } 
            </div>
            <div id="myRoutinesFormDisplay">

            </div>



        </div>

    )
}

export default Routines