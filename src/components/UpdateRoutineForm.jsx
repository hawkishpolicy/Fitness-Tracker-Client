import React, { useState, useEffect} from 'react'
import { updateRoutineCall } from '../API-Adapter'

const UpdateRoutineForm = (props) => {

    let routine = props.routine
    let nameOfRoutine = ""
    let goalOfRoutine = ""

    const setShowUpdateRoutineForm = props.setShowUpdateRoutineForm
    const getAllUserRoutines = props.getAllUserRoutines

    
   
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
            <form id="updateRoutineForm" >

                <h2>Update Routine</h2>

                
                
                    <input type="text" defaultValue={nameOfRoutine} placeholder = "Name" name="name" onChange={(event)=>{

                        nameOfRoutine = event.target.value

                    }}></input>
                

            
                    <input type="text" defaultValue={goalOfRoutine} placeholder="Goal" name="goal" onChange={(event) => {

                        goalOfRoutine = event.target.value

                    }}/> 


                <button type="submit">Submit</button>

                <br></br>
                <br></br>

            </form>
        </div>
    )

}

export default UpdateRoutineForm