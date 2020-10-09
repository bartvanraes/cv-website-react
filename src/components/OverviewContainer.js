import React from 'react'

function showSkills(skills) {
    return skills.map((skill) => <li key={skill.name}>{skill.name}</li>)
}

function OverviewContainer(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <h1>{props.workExperiences.length > 0 ? props.workExperiences[0].company : 'no experience'}</h1>
                <ul>{showSkills(props.skills.displayedSkills)}</ul>
                <button>Filter</button>
            </form>
        </div>
    )
}

export default OverviewContainer