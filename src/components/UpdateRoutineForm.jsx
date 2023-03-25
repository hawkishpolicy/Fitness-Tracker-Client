import React, { useState, useEffect} from 'react'
import { updateRoutineCall } from '../API-Adapter'

const UpdateRoutineForm = (props) => {

    let routine = props.routine
    let nameOfRoutine = ""
    let goalOfRoutine = ""

    const setShowUpdateRoutineForm = props.setShowUpdateRoutineForm
    const getAllUserRoutines = props.getAllUserRoutines

    // const [allActivities, setAllActivites] = useState([])
    
    // const [selectedActivityId, setSelectedActivityId] = useState(null)
    
   
    return (
        <div onSubmit={async (event) => {

            event.preventDefault();
            console.log(event)

            try{
                const updatedRoutine = await updateRoutineCall (routine.id, nameOfRoutine, goalOfRoutine)
                setShowUpdateRoutineForm(false)
                getAllUserRoutines()
                console.log("updated routine", updatedRoutine)
                
            }catch (error) {
                alert("Cannot add duplicate routine")
                console.log("Error during updateRoutineForm on Submit")
                setShowUpdateRoutineForm(false)
                throw error;
            }


        }}>
            <form >

                <h2>Update Routine</h2>

                <label className="">
                    Name: 
                    <input type="text" defaultValue={nameOfRoutine} name="name" onChange={(event)=>{

                        nameOfRoutine = event.target.value

                    }}></input>
                </label>

                <label className="formLabel" >
                    Goal:
                    <input type="text" defaultValue={goalOfRoutine} name="goal" onChange={(event) => {

                        goalOfRoutine = event.target.value

                    }}/> 
                </label>


                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default UpdateRoutineForm