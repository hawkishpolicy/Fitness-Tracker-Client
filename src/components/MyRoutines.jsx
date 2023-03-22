import React, { useState, useEffect } from "react";
import { CreateRoutineForm, RoutineCard } from "./"
import { getAllUserRoutinesCall } from "../API-Adapter";

const MyRoutines = () => {

    const [userRoutines, setUserRoutines] = useState([])

    const getAllUserRoutines = async () => {
        const allRoutines = await getAllUserRoutinesCall(localStorage.getItem("username"))
        setUserRoutines(allRoutines)
        console.log("All User Routines: ", userRoutines)
    }
    
    useEffect(() => {
        getAllUserRoutines();
    }, [])

    return(

        <div>
            <br></br>

            {
                userRoutines.map((routine, idx) => {
    
                    return(<RoutineCard key={"allUserRoutines idx: " + idx} routine={routine} isPublic={routine.isPublic}></RoutineCard>)
    
                })
            }

            {/* <CreateRoutineForm></CreateRoutineForm> */}

        </div>
    )
    
}

export default MyRoutines