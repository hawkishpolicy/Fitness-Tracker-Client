import React, { useState } from 'react'
import { AttachActivityForm } from './'
import { deleteRoutineCall, deleteRoutineActivityCall, updateRoutineActivityCall, getAllUserRoutinesCall, getPublicRoutinesCall } from '../API-Adapter'
import UpdateRoutineForm from './UpdateRoutineForm'
import UpdateRoutineActivityForm from './UpdateRoutineActivityForm'

const RoutineCard = (props) => {

    const routine = props.routine
    const myRoutine = props.myRoutine
    const getAllUserRoutines = props.getAllUserRoutines
    const setRoutines = props.setRoutines
    const showUserRoutines = props.showUserRoutines
    const setShowUserRoutines = props.setShowUserRoutines
    
    
    const [showAttachForm, setShowAttachForm] = useState(false)
    const [showUpdateRoutineForm, setShowUpdateRoutineForm] = useState(false)
    const [showUpdateRoutineActivityForm, setShowUpdateRoutineActivityForm] = useState(false)
    const [routineActivityId, setRoutineActivityId] = useState ()


    return(
        <div id="routineCard">
            <h2 className="title">{routine.name}</h2>
            <li>Goal: {routine.goal}</li>
            <li>Creator: {routine.creatorName}</li>

            <div id="routineButtonsContainer">
            {( (!myRoutine && showUserRoutines) && <button id="routineButton" onClick={ async () => {
                const publicRoutines = await getPublicRoutinesCall()
                setRoutines(publicRoutines)
                setShowUserRoutines(!showUserRoutines)
            }}>Show All Routines</button>)}

            {( (!myRoutine && !showUserRoutines ) && <button id="routineButton" onClick={ async () => {
                const usersRoutines = await getAllUserRoutinesCall(routine.creatorName)
                setRoutines(usersRoutines)
                setShowUserRoutines(!showUserRoutines)
            }}>Show Creator Routines</button> )}
            </div>
            {
                
                (myRoutine && ( routine.isPublic ? <li>Status: Public</li> : <li>Status: Private</li>) )
                
            }
            <div id="routineButtonsContainer">

{
    (myRoutine && (<button id="routineButton" onClick={async(event) => {
        event.preventDefault()
        setShowUpdateRoutineForm(!showUpdateRoutineForm)
    }}>Update Routine</button>))

            }

            {(myRoutine && <button id="routineButton" onClick={() => {
                setShowAttachForm(!showAttachForm)
            }}>Add Activity To Routine</button>)}

            {
            (myRoutine && (<button id="routineButton" className="deleteButton" onClick={async(event) => {
                event.preventDefault()
                console.log("Delete Routine:", event)
                try {
                    await deleteRoutineCall (routine.id)
                    getAllUserRoutines()
                } catch (error) {
                    console.log(error)
                }
            }}>Delete Routine</button>))
        
            }
            </div>
            
            <br></br>

            <h3 className="title"> Included Activities: </h3>

            {
                routine.activities.map((activity, idx) => {
                    return (
                        <div key={"activities in routine idx: " + idx}>
                            
                            <h4>{activity.name}</h4>
                            <li>Description: {activity.description}</li>
                            <li>Count: {activity.count}</li>
                            <li>Duration: {activity.duration}</li>
                            
                        <div id="routineActivityButtonsContainer">
                            {(myRoutine && <button id="routineActivityButton" onClick={async (event) => {
                                event.preventDefault()
                                setShowUpdateRoutineActivityForm(!showUpdateRoutineActivityForm)
                                setRoutineActivityId(activity.routineActivityId)
                            }}>Update Routine Activity</button>)}

                            {(myRoutine && <button id = "routineActivityButton" className="deleteButton" onClick={async () => {
                                await deleteRoutineActivityCall(activity.routineActivityId)
                                getAllUserRoutines();
                            }}>Delete Routine Activity</button>)}
                        </div>
                            <br></br>
                            <br></br>

                        </div>
                    )
                })
            }


            
            {/* Buttons */}
            

            
            

            {/* Forms */}

            {(showAttachForm && <AttachActivityForm routine={routine} setShowAttachForm={setShowAttachForm} getAllUserRoutines={getAllUserRoutines}></AttachActivityForm>)}

            {(showUpdateRoutineForm && <UpdateRoutineForm routine={routine} setShowUpdateRoutineForm={setShowUpdateRoutineForm} getAllUserRoutines={getAllUserRoutines}></UpdateRoutineForm>)}

            {(showUpdateRoutineActivityForm && <UpdateRoutineActivityForm routine={routine} routineActivityId={routineActivityId} setShowUpdateRoutineActivityForm={setShowUpdateRoutineActivityForm} getAllUserRoutines={getAllUserRoutines}></UpdateRoutineActivityForm>)}


        </div>
    )

}

export default RoutineCard