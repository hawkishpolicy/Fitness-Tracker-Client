import React, { useState, useEffect} from 'react'
import { getAllActivitiesCall, addActivityToRoutineCall } from '../API-Adapter'

const AttachActivityForm = (props) => {

    let routine = props.routine
    let countOfActivity = ""
    let durationOfActivity = ""

    const setShowAttachForm = props.setShowAttachForm
    const getAllUserRoutines = props.getAllUserRoutines



    const [allActivities, setAllActivities] = useState([])
    
    const [selectedActivityId, setSelectedActivityId] = useState(null)
    
    const getAllActivities = async () => {
        const fetchedActivities = await getAllActivitiesCall();
        setAllActivities(fetchedActivities)
        
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
            <form id="attachActivityForm" >

                <h2>Add Activity</h2>

            
                    <select placeholder={"test"} onChange={(evt) => {

                        setSelectedActivityId(evt.target.value)

                    }}>

                        <option value={""}>Select Activity</option>
                        
                        {
                            (allActivities.length > 0 ? allActivities.map((activity, idx) => {

                                console.log("activityObject: ", routine)

                                return (<option value={activity.id} key={`idx of allActivities map: ${idx}`}>{activity.name}</option>)
                            }) : null)
                        }

                    </select>

            
                    <input type="text" defaultValue={countOfActivity}placeholder="Count" name="count" onChange={(event)=>{

                        countOfActivity = event.target.value

                    }}></input>
            

            
                    <input type="text" defaultValue={durationOfActivity} placeholder="Duration" name="duration" onChange={(event) => {

                        durationOfActivity = event.target.value

                    }}/> 
            
                    <button type="submit">Submit</button>

                    <br></br>

            </form>
        </div>
    )

}

export default AttachActivityForm