import React, {Component, useContext} from 'react'
import { WorkExperienceContext } from '../context/WorkExperienceContext'
import { SkillContext } from '../context/SkillContext'
import OverviewContainer from './OverviewContainer'

const Overview = () => {
    const {workExperiences} = useContext(WorkExperienceContext)
    const {skills} = useContext(SkillContext)
    console.log(skills)
    /*const {workExperience, skill} = useContext(CVContext)
    console.log(workExperience)
    const [workExperiences, setWorkExperience] = workExperience
    console.log('Overview')
    console.log(workExperiences)*/
    
    return OverviewContainer({
        workExperiences,
        skills
    })
}

export default Overview