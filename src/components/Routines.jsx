import React, { useState, useEffect} from "react";
import { RoutineCard } from "./"
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

    
    return (

        <div id="basicPage">
             <div id="myRoutinesDisplay">

            {routines.length ? routines.map((routine, idx) => {

                    return(<RoutineCard key={"allPublicRoutines idx: " + idx} routine={routine}></RoutineCard>)

                }) : <div className="loader"></div>
            } 
            </div>
            <div id="myRoutinesFormDisplay">

            </div>



        </div>

    )
}

export default Routines