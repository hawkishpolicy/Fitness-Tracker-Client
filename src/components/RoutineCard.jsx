import React, { useState } from 'react'
import { AttachActivityForm } from './'
import { deleteRoutineCall, deleteRoutineActivityCall, updateRoutineCall } from '../API-Adapter'
import UpdateRoutineForm from './UpdateRoutineForm'

const RoutineCard = (props) => {

    const routine = props.routine
    const myRoutine = props.myRoutine
    const getAllUserRoutines = props.getAllUserRoutines

    const [showAttachForm, setShowAttachForm] = useState(false)
    const [showUpdateRoutineForm, setShowUpdateRoutineForm] = useState(false)

    return(
        <div id="routineCard">
            <h2 className="title">{routine.name}</h2>
            <li>Goal: {routine.goal}</li>
            <li>Creator Name: {routine.creatorName}</li>
            <li>Id: {routine.id}</li>
            {
                
                (myRoutine && ( routine.isPublic ? <li>Public</li> : <li>Private</li>) )
                
            }

            <br></br>

            <h2 className="title">Activities: </h2>

            {
                routine.activities.map((activity, idx) => {
                    return (
                        <div key={"activities in routine idx: " + idx}>
                            
                            <li>Name: {activity.name}</li>
                            <li>Description: {activity.description}</li>
                            <li>Count: {activity.count}</li>
                            <li>Duration: {activity.duration}</li>
                            
                            {/* <button>Delete Activity From Routine</button> */}

                            {(myRoutine && <button onClick={async () => {
                                await deleteRoutineActivityCall(activity.routineActivityId)
                                getAllUserRoutines();
                            }}>Remove activity from routine</button>)}

                            <br></br>
                            <br></br>

                        </div>
                    )
                })
            }


            
            {/* Buttons */}
            <div id="">
            {
            (myRoutine && (<button onClick={async(event) => {
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

{
            (myRoutine && (<button onClick={async(event) => {
                event.preventDefault()
                setShowUpdateRoutineForm(!showUpdateRoutineForm)
            }}>Update Routine</button>))

            }

            {(myRoutine && <button onClick={() => {
                setShowAttachForm(!showAttachForm)
            }}>Add Activity To Routine</button>)}

            </div>

            
            

            {/* Forms */}

            {(showAttachForm && <AttachActivityForm routine={routine} setShowAttachForm={setShowAttachForm} getAllUserRoutines={getAllUserRoutines}></AttachActivityForm>)}

            {(showUpdateRoutineForm && <UpdateRoutineForm routine={routine} setShowUpdateRoutineForm={setShowUpdateRoutineForm} getAllUserRoutines={getAllUserRoutines}></UpdateRoutineForm>)}


        </div>
    )

}

export default RoutineCard