import WorkExperienceOverviewContainer from './WorkExperienceOverviewContainer'
import {useContext, useEffect} from 'react'
import WorkExperienceDispatchType from 'enums/WorkExperienceDispatchType'
import {WorkExperienceContext} from 'context/WorkExperienceContext'
import './WorkExperienceOverviewComponent.css'

const WorkExperienceOverview = () => {
    const {workExperiences, dispatch} = useContext(WorkExperienceContext)

    useEffect(() => {
        dispatch({ type: WorkExperienceDispatchType.FILTER,  
            filter: {
                temporaryOnly: false,
                consultancyOnly: false
            }
        })
    }, [dispatch])

    const changeFilter = (event, value) => {
        const name = event.currentTarget.name
        let val = !!event.currentTarget.value ? event.currentTarget.value : value 
        val = val === undefined ? '': val
        dispatch({
            type: WorkExperienceDispatchType.FILTER,  
            filter: {
                [name]: val
            }
        })
    }

    const confirmTextSearch = (e) => {
        if (e.keyCode === 13) {
            dispatch({
                type: WorkExperienceDispatchType.FILTER,  
                filter: {
                    'confirmTextSearch': true
                }
            })
        }
    }

    const resetFilter = () => {
        dispatch({
            type: WorkExperienceDispatchType.FILTER,  
            filter: {
                search: '',
                temporaryOnly: false,
                consultancyOnly: false,
                quitOnly: false,
                confirmTextSearch: false
            }
        })
    }

    return WorkExperienceOverviewContainer({
        workExperiences,
        changeFilter,
        confirmTextSearch,
        resetFilter
    })
}

export default WorkExperienceOverview