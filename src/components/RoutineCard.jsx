import React from 'react'

const RoutineCard = (props) => {

    const routine = props.routine
    const isPublic = props.isPublic

    return(
        <div id="routineCard">
            <h2 className="title">{routine.name}</h2>
            <li>Creator Name: {routine.creatorName}</li>
            <li>Goal: {routine.goal}</li>
            {
                
                (isPublic !== undefined && ( isPublic ? <li>Public</li> : <li>Private</li>) )
                
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

        </div>
    )

}

export default RoutineCard