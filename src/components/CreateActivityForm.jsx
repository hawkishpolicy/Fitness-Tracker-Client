import React from "react"
import { createNewActivityCall } from "../API-Adapter";

const CreateActivityForm = (props) => {

const getActivities = props.getActivities

let nameOfActivity = ""
let descriptionOfActivity = ""

    return (
        <div>
            <h2>Activities always win</h2>
            <div id="basicPage" onSubmit={async (event) => {

event.preventDefault();

if (nameOfActivity.length > 0 && descriptionOfActivity.length > 0) {
    await createNewActivityCall(nameOfActivity, descriptionOfActivity)
    getActivities()
    nameOfActivity = ""
    descriptionOfActivity = ""
} else {
    alert("Need all text fields to be full")
}


}}>
<form id="createActivityCard">

    <label className="">
        Name: 
        <input type="text" defaultValue={nameOfActivity} name="name" onChange={(event)=>{

            nameOfActivity = event.target.value

        }}></input>
    </label>

    <label className="">
        Goal: 
        <input type="text" defaultValue={descriptionOfActivity} name="goal" onChange={(event)=>{

            descriptionOfActivity = event.target.value

        }}></input>
    </label>
    <button id={"cardButton"} type="submit">Submit</button>

</form>
</div>
        </div>
    )
}

export default CreateActivityForm