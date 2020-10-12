import {useContext, useEffect} from 'react'
import InfoOverviewContainer from './InfoOverviewContainer'
import {InfoOverviewContext} from 'context/InfoOverviewContext'
import InfoOverviewDispatchType from 'enums/InfoOverviewDispatchType'
import './InfoOverviewComponent.css'

const InfoOverview = () => {
    console.log('InfoOverview')
    const {infoOverview, dispatch} = useContext(InfoOverviewContext)

    console.log(infoOverview)

    const toggleSkills = (e) => {
        dispatch({ type: InfoOverviewDispatchType.TOGGLE_SHOW_MORE,  
            toggleSkills: {

            }
        })
    }

    const handleGeneralSkillSelect = (e, skill) => {
        console.log('handleGeneralSkillSelect')
        console.log(skill)
        dispatch({ type: InfoOverviewDispatchType.GENERAL_SKILL_SELECTED,  
            selectedGeneralSkill: skill
        })
    }

    useEffect(() => {
        dispatch({ type: InfoOverviewDispatchType.GENERAL_SKILL_SELECTED,  
            selectedGeneralSkill: ''
        })
    }, [dispatch])

    return InfoOverviewContainer({
        infoOverview,
        toggleSkills,
        handleGeneralSkillSelect
    })
}

export default InfoOverview