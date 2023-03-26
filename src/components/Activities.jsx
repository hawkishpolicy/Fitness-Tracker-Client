import React, {useState, useEffect} from "react";
import { getAllActivitiesCall } from "../API-Adapter";
import CreateActivityForm from "./CreateActivityForm";

const Activities = (props) => {

    const [activities,setActivities] = useState([])
    const isLoggedIn = props.isLoggedIn

    
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
        <div id="basicPage">
            <div id="myRoutinesDisplay">
        {activities.length ? activities.map((activity, idx) => {
            return (
                <div id="activityCard" key={idx}>
                    <h2 className="title">{activity.name}</h2>
                    <li>Description: {activity.description}</li>
                    
                </div>
                )}
                ): <div className="loader"></div>
                }
            </div>
            <div id="myRoutinesFormDisplay">
            {
            isLoggedIn && activities.length &&
            <CreateActivityForm getActivities = {getActivities}></CreateActivityForm>
            }
            </div>

            </div>
    )
    
}

export default Activities