import {useContext, useEffect} from 'react'
import SkillOverviewContainer from './SkillOverviewContainer'
import { SkillContext } from 'context/SkillContext'
import SkillDispatchType from 'enums/SkillDispatchType'
import './SkillOverviewComponent.css'

const SkillOverview = () => {
    const {skills, dispatch} = useContext(SkillContext)

    useEffect(() => {
        dispatch({ type: SkillDispatchType.FILTER,  
            filter: {
                professionalOnly: false,
                handsonOnly: false
            }
        })
    }, [dispatch])

    const changeFilter = (event, value) => {
        let val = !!event.currentTarget.value ? event.currentTarget.value : value 
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