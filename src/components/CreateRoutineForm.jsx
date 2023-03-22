import React from 'react'
import { createNewRoutineCall } from '../API-Adapter'

const CreateRoutineForm = () => {

    const publicCheckBox = document.getElementById("publicCheckBox")

    let nameOfRoutine = ""
    let goalOfRoutine = ""
    let isPublic = false;


    return (
        <div id="basicPage" onSubmit={async (event) => {

            event.preventDefault();

            if (nameOfRoutine.length > 0 && goalOfRoutine.length > 0) {
                await createNewRoutineCall(isPublic, nameOfRoutine, goalOfRoutine)

                nameOfRoutine = ""
                goalOfRoutine = ""
                publicCheckBox.checked = false;
                isPublic = publicCheckBox.checked
            } else {
                alert("Need all text fields to be full")
            }


        }}>
            <form id="createRoutineCard">

                <label className="">
                    Name: 
                    <input type="text" defaultValue={nameOfRoutine} name="name" onChange={(event)=>{

                        nameOfRoutine = event.target.value

                    }}></input>
                </label>

                <label className="">
                    Goal: 
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