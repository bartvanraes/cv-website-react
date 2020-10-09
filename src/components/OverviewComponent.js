import React, {Component, useContext, useEffect} from 'react'
import { WorkExperienceContext } from 'context/WorkExperienceContext'
import { SkillContext } from 'context/SkillContext'
import OverviewContainer from './OverviewContainer'
import CategoryType from 'enums/CategoryType'
import SkillDispatchType from 'enums/SkillDispatchType'

const Overview = () => {
    
    const {workExperiences} = useContext(WorkExperienceContext)
    const {skills, dispatch} = useContext(SkillContext)
 
    useEffect(() => {
            dispatch({ type: SkillDispatchType.FILTER,  
                skill: {
                    name: 'vue'
                }
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: SkillDispatchType.FILTER,  
            skill: {                
                category: CategoryType.PROGRAMMING_SKILL,
                legacy: false,
                professional: false
            }
        })
    }
    
    return OverviewContainer({
            workExperiences,
            skills,
            handleSubmit
        })
    
}

export default Overview