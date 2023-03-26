import React from "react"
import { updateRoutineActivityCall } from "../API-Adapter"

const UpdateRoutineActivityForm = (props) => {
    const routine = props.routine
    const routineActivityId = props.routineActivityId
    let durationOfActivity= ""
    let countOfActivity= ""

    const setShowUpdateRoutineActivityForm = props.setShowUpdateRoutineActivityForm
    const getAllUserRoutines = props.getAllUserRoutines
    console.log("!!!!,", routine)
    
    // const getRaId = routine.activities.map(routineActivityId, idx)
    // console.log ("^^^^^",getRaId)
   
    return (
        
        // routine.activities.map((activity, idx) => {
        //     return (
        //         <>
        //         <li>{activity.routineActivityId}

        //         </li>
                
        <div onSubmit={async (event) => {

            event.preventDefault();
            console.log(event)

            try{
                const updatedActivity = await updateRoutineActivityCall (routineActivityId, countOfActivity, durationOfActivity)
                setShowUpdateRoutineActivityForm(false)
                getAllUserRoutines()
                console.log("updated routine activity", updatedActivity)
                
            }catch (error) {
                alert("Cannot add duplicate routine")
                console.log("Error during updateRoutineForm on Submit")
                setShowUpdateRoutineActivityForm(false)
                throw error;
            }


        }}>
            <form id="updateRoutineForm" >

                <h2>Update Routine Activity</h2>

                
                
                    <input type="text" defaultValue={countOfActivity} placeholder = "Count" name="name" onChange={(event)=>{

                        countOfActivity = event.target.value

                    }}></input>
                

            
                    <input type="text" defaultValue={durationOfActivity} placeholder="Duration" name="goal" onChange={(event) => {

                        durationOfActivity = event.target.value

                    }}/> 


                <button type="submit">Submit</button>

            </form>
        </div> 

    )}
    


export default UpdateRoutineActivityForm