import React, { useState, useEffect} from 'react'
import { getAllActivitiesCall, addActivityToRoutineCall } from '../API-Adapter'

const AttachActivityForm = (props) => {

    let routine = props.routine
    let countOfActivity = ""
    let durationOfActivity = ""

    const setShowAttachForm = props.setShowAttachForm
    const getAllUserRoutines = props.getAllUserRoutines

    const [allActivities, setAllActivites] = useState([])
    
    const [selectedActivityId, setSelectedActivityId] = useState(null)
    
    const getAllActivities = async () => {
        const fetchedActivities = await getAllActivitiesCall();
        setAllActivites(fetchedActivities)
    }

    useEffect(() => {
        getAllActivities();
    }, [])
   
    return (
        <div onSubmit={async (event) => {

            event.preventDefault();

            try{
                await addActivityToRoutineCall(routine.id, selectedActivityId, countOfActivity, durationOfActivity)
                setShowAttachForm(false)
                getAllUserRoutines();
                
            }catch (error) {
                alert("Cannot add duplicate activity")
                console.log("Error during attachActivityForm onSubmit")
                setShowAttachForm(false)
                throw error;
            }


        }}>
            <form >

                <h2>Add Activity</h2>

                <label className="">
                    Activity: 
                    <select placeholder={"test"} onChange={(evt) => {

                        setSelectedActivityId(evt.target.value)

                    }}>
                        {/* <option value="userPosts">User Posts</option> */}

                        <option value={""}>Select Activity</option>
                        
                        {
                            (allActivities.length > 0 ? allActivities.map((activity, idx) => {
                                return (<option value={activity.id} key={`idx of allActivities map: ${idx}`}>{activity.name}</option>)
                            }) : null)
                        }

                    </select>
                </label>

                <label className="">
                    Count: 
                    <input type="text" defaultValue={countOfActivity} name="count" onChange={(event)=>{

                        countOfActivity = event.target.value

                    }}></input>
                </label>

                <label className="formLabel" >
                    Duration:
                    <input type="text" defaultValue={durationOfActivity} name="duration" onChange={(event) => {

                        durationOfActivity = event.target.value

                    }}/> 
                </label>


                <button type="submit">Submit</button>

            </form>
        </div>
    )

}

export default AttachActivityForm