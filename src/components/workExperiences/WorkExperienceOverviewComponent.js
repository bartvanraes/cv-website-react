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
        const name = event.currentTarget.name
        dispatch({
            type: WorkExperienceDispatchType.FILTER,  
            filter: {
                [name]: value
            }
        })
    }

    return WorkExperienceOverviewContainer({
        workExperiences,
        changeFilter
    })
}

export default WorkExperienceOverview