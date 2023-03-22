import React, {useState, useEffect} from "react";
import { getAllActivitiesCall } from "../API-Adapter";

const Activities = () => {

    const [activities,setActivities] = useState([])
    // const routine = props.routines
    // const setRoutine = props.setRoutines
    // const idx = props.idx

    
    const getActivities = async () => {
        const publicActivities = await getAllActivitiesCall()
        setActivities(publicActivities)
        console.log("All Activities", publicActivities)
    }
    
    
    useEffect(()=>{
        getActivities()
    }, [])

    try {
        
    } catch (error) {
        console.error(error)
    }

    return(
        <div >
        {activities.map((activity, idx) => {
            return (
                <div id="activityCard" key={idx}>
                    <h2 className="title">{activity.name}</h2>
                    <li>Description: {activity.description}</li>
                    
                </div>
                )}
                )}
            </div>

    )
    
}

export default Activities