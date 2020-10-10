import {useContext, useEffect} from 'react'
import SkillOverviewContainer from './SkillOverviewContainer'
import { SkillContext } from 'context/SkillContext'
import SkillDispatchType from 'enums/SkillDispatchType'
import './SkillOverviewComponent.css'

const SkillOverview = () => {
    const {skills, dispatch} = useContext(SkillContext)

    console.log('SkillOverview skills')
    console.log(skills)

    useEffect(() => {
        dispatch({ type: SkillDispatchType.FILTER,  
            skill: {
                professionalOnly: false,
                handsonOnly: false
            }
        })
    }, [])

    const changeFilter = (event, value) => {
        console.log('changeFilter')
        console.log(event)
        console.log(value)
        console.log(event.currentTarget.name)
        console.log(event.currentTarget.value)

        const val = !!event.currentTarget.value ? event.currentTarget.value : value 
        console.log(val)
        const name = event.currentTarget.name
        dispatch({
            type: SkillDispatchType.FILTER,  
            skill: {
                [name]: val
            }
        })
    }

    return SkillOverviewContainer({
        skills,
        changeFilter
    })
}

export default SkillOverview