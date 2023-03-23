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

        <div id="basicPage">

            <div id="#myRoutinesDisplay">

            {userRoutines.length ? userRoutines.map((routine, idx) => {

                    return(
                    <RoutineCard 
                        key={"allUserRoutines idx: " + idx} 
                        routine={routine} 
                        myRoutine={true}
                        getAllUserRoutines = {getAllUserRoutines}
                        >
                            
                    </RoutineCard>)
    
                }) : <div></div> 
                
                // <div className="loader">

                // </div>
            }

            </div>

            <div id="myRoutinesFormDisplay">
                <CreateRoutineForm getAllUserRoutines = {getAllUserRoutines}></CreateRoutineForm>
            </div>

        </div>
    )
    
}

export default MyRoutines