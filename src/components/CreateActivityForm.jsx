import React from "react"
import { createNewActivityCall } from "../API-Adapter";

const CreateActivityForm = (props) => {

const getActivities = props.getActivities

let nameOfActivity = ""
let descriptionOfActivity = ""

    return (
        <div>
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

    <h2>Add Activity Below</h2>

    
        <input type="text" defaultValue={nameOfActivity}placeholder= "Name" name="name" onChange={(event)=>{

            nameOfActivity = event.target.value

        }}></input>



        <input type="text" defaultValue={descriptionOfActivity} placeholder="Description" name="goal" onChange={(event)=>{

            descriptionOfActivity = event.target.value

        }}></input>
    <button id={"cardButton"} type="submit">Submit</button>

</form>
</div>
        </div>
    )
}

export default CreateActivityForm