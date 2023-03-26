import React, { useState } from 'react'
import { AttachActivityForm } from './'
import { deleteRoutineCall, deleteRoutineActivityCall, updateRoutineActivityCall } from '../API-Adapter'
import UpdateRoutineForm from './UpdateRoutineForm'
import UpdateRoutineActivityForm from './UpdateRoutineActivityForm'

const RoutineCard = (props) => {

    const routine = props.routine
    const myRoutine = props.myRoutine
    const getAllUserRoutines = props.getAllUserRoutines

    const [showAttachForm, setShowAttachForm] = useState(false)
    const [showUpdateRoutineForm, setShowUpdateRoutineForm] = useState(false)
    const [showUpdateRoutineActivityForm, setShowUpdateRoutineActivityForm] = useState(false)
    const [routineActivityId, setRoutineActivityId] =useState ()


    return(
        <div id="routineCard">
            <h1>Routine:</h1>
            <h2 className="title">{routine.name}</h2>
            <li>Goal: {routine.goal}</li>
            <li>Creator: {routine.creatorName}</li>
            {/* <li>Id: {routine.id}</li> */}
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

            <h1 className="title">Required Activities: </h1>

            {
                routine.activities.map((activity, idx) => {
                    return (
                        <div key={"activities in routine idx: " + idx}>
                            
                            <h2>Name: {activity.name}</h2>
                            <li>Description: {activity.description}</li>
                            <li>Count: {activity.count}</li>
                            <li>Duration: {activity.duration}</li>
                            <li>Id: {activity.id}</li>
                            
                            {/* <button>Delete Activity From Routine</button> */}
                            {/* button to update count and duration */}


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