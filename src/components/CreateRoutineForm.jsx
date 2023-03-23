import React from 'react'
import { createNewRoutineCall} from '../API-Adapter'

const CreateRoutineForm = (props) => {


    const getAllUserRoutines = props.getAllUserRoutines

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
                nameOfRoutine = ""
                goalOfRoutine = ""
                publicCheckBox.checked = false;
                isPublic = publicCheckBox.checked
            } else {
                alert("Need all text fields to be full")
            }


        }}>
            <form id="createRoutineCard">

                <h2>Create Routine</h2>

                <label className="">
                    Routine Name: 
                    <input type="text" defaultValue={nameOfRoutine} name="name" onChange={(event)=>{

                        nameOfRoutine = event.target.value

                    }}></input>
                </label>

                <label className="">
                    Routine Goal: 
                    <input type="text" defaultValue={goalOfRoutine} name="goal" onChange={(event)=>{

                        goalOfRoutine = event.target.value

                    }}></input>
                </label>

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