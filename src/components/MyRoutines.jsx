import React, { useState, useEffect } from "react";
import { CreateRoutineForm, RoutineCard } from "./"
import { getAllUserRoutinesCall } from "../API-Adapter";

const MyRoutines = () => {

    const [userRoutines, setUserRoutines] = useState([])

    const getAllUserRoutines = async () => {
        const allRoutines = await getAllUserRoutinesCall(localStorage.getItem("username"))
        setUserRoutines(allRoutines)
    }
    
    useEffect(() => {
        getAllUserRoutines();
    }, [])

    return(

        <div>

            {userRoutines.length ? userRoutines.map((routine, idx) => {
    
                    return(
                    <RoutineCard 
                        key={"allUserRoutines idx: " + idx} 
                        routine={routine} 
                        myRoutine={true}
                        getAllUserRoutines = {getAllUserRoutines}>
                            
                    </RoutineCard>)
    
                }) : <div></div> 
                
                // <div className="loader">

                // </div>
            }

            <CreateRoutineForm getAllUserRoutines = {getAllUserRoutines}></CreateRoutineForm>

        </div>
    )
    
}

export default MyRoutines