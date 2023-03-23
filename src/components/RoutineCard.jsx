import React from 'react'
import { deleteRoutineCall } from '../API-Adapter'

const RoutineCard = (props) => {

    const routine = props.routine
    const myRoutine = props.myRoutine
    const getAllUserRoutines = props.getAllUserRoutines
    console.log("dwdgudwud", routine.id)

    return(
        <div id="routineCard">
            <h2 className="title">{routine.name}</h2>
            <li>Creator Name: {routine.creatorName}</li>
            <li>Goal: {routine.goal}</li>
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

                            

                            <br></br>

                        </div>
                    )
                })
            }
            <div id="" onClick={async(event) => {
            event.preventDefault()
            console.log("wfwfwff", event)
             try {
                await deleteRoutineCall (routine.id)
                getAllUserRoutines()
             } catch (error) {
                console.log(error)
             }
            }}>
            {
            (myRoutine && (<button>Delete</button>))
            }
            </div>

            {/* <div id="" onSubmit={async(event) => {
            event.preventDefault()
             try {
                const deleteRoutine  = await deleteRoutineCall (routine.id)
             } catch (error) {
                console.log(error)
             }
            }}>
            {
            (myRoutine && (<button type="submit">Update</button>))
            }
            </div> */}
        </div>
    )

}

export default RoutineCard