import WorkExperienceOverviewContainer from './WorkExperienceOverviewContainer'
import {useContext, useEffect} from 'react'
import WorkExperienceDispatchType from 'enums/WorkExperienceDispatchType'
import {WorkExperienceContext} from 'context/WorkExperienceContext'
import './WorkExperienceOverviewComponent.css'

const WorkExperienceOverview = () => {
    const {workExperiences, dispatch} = useContext(WorkExperienceContext)

    console.log('WorkExperienceOverview')
    console.log(workExperiences)
    useEffect(() => {
        dispatch({ type: WorkExperienceDispatchType.FILTER,  
            filter: {
                temporaryOnly: false,
                consultancyOnly: false
            }
        })
    }, [])

    const changeFilter = (event, value) => {
        console.log('changeFilter')
        const name = event.currentTarget.name
        console.log(name)
        let val = !!event.currentTarget.value ? event.currentTarget.value : value 
        console.log(val)
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