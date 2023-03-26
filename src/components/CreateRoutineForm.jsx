import React from 'react'
import { createNewRoutineCall} from '../API-Adapter'

const CreateRoutineForm = (props) => {


    const getAllUserRoutines = props.getAllUserRoutines

    const routineForm = document.getElementById("createRoutineCard")

    const publicCheckBox = document.getElementById("publicCheckBox")

    let nameOfRoutine = ""
    let goalOfRoutine = ""
    let isPublic = false;


    return (
        <div onSubmit={async (event) => {

            event.preventDefault();

            if (nameOfRoutine.length > 0 && goalOfRoutine.length > 0) {
                await createNewRoutineCall(isPublic, nameOfRoutine, goalOfRoutine)
                getAllUserRoutines()
                routineForm.reset()
                nameOfRoutine = ""
                goalOfRoutine = ""
                publicCheckBox.checked = false;
                isPublic = publicCheckBox.checked
            } else {
                alert("Need all text fields to be full")
            }


        }}>
            <form id="createRoutineCard">

                <h1>Create Routine</h1>

                
                    <input type="text" defaultValue={nameOfRoutine} placeholder="Routine Name" name="name" onChange={(event)=>{

                        nameOfRoutine = event.target.value

                    }}></input>
            

            
                    <input type="text" defaultValue={goalOfRoutine} placeholder="Routine Goal" name="goal" onChange={(event)=>{

                        goalOfRoutine = event.target.value

                    }}></input>
            

                <label className="formLabel" >
                    Public:
                    <input id="publicCheckBox" type="checkbox" onChange={() => {

                        isPublic = publicCheckBox.checked

                    }}/> 
                </label>


                <button id={"cardButton"} type="submit">Submit</button>

            </form>
        </div>
    )

}

export default CreateRoutineForm