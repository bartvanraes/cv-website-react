import React from 'react'

function OverviewContainer(props) {
    return (
        <div>
            TEST
            <h1>{props.workExperiences[0].company}</h1>
            <h2>{props.skills[1].name}</h2>
        </div>
    )
}

export default OverviewContainer