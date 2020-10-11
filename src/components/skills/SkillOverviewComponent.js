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
            filter: {
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

        let val = !!event.currentTarget.value ? event.currentTarget.value : value 
        console.log(val)
        val = val === undefined ? '': val
        const name = event.currentTarget.name
        dispatch({
            type: SkillDispatchType.FILTER,  
            filter: {
                [name]: val
            }
        })
    }

    const confirmTextSearch = (e) => {
        console.log('confirmTextSearch')
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            dispatch({
                type: SkillDispatchType.FILTER,  
                filter: {
                    'confirmTextSearch': true
                }
            })
        }
    }

    const resetFilter = () => {
        dispatch({
            type: SkillDispatchType.FILTER,  
            filter: {
                search: '',
                professionalOnly: false,
                legacyOnly: null,
                category: '',
                handsonOnly: false,
                confirmTextSearch: false
            }
        })
    }

    return SkillOverviewContainer({
        skills,
        changeFilter,
        confirmTextSearch,
        resetFilter
    })
}

export default SkillOverview