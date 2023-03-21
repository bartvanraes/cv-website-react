import {useContext} from 'react'
import { WorkExperienceContext } from '@/context/WorkExperienceContext'
import { SkillContext } from '@/context/SkillContext'
import { TabContext } from '@/context/TabContext'
import OverviewContainer from './OverviewContainer'
import CategoryType from '@/enums/CategoryType'
import SkillDispatchType from '@/enums/SkillDispatchType'

const Overview = () => {
    
    const {workExperiences} = useContext(WorkExperienceContext)
    const {skills, dispatch} = useContext(SkillContext)
    const {tab, setSelectedTab} = useContext(TabContext)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: SkillDispatchType.FILTER,  
            skill: {                
                category: CategoryType.PROGRAMMING_SKILL,
                legacyOnly: false,
                professionalOnly: false
            }
        })
    }

    const tabsHandleChange = (e, value) => {
        setSelectedTab({
            selectedTab: value
        })
    }
    
    return OverviewContainer({
            workExperiences,
            skills,
            tab,
            tabsHandleChange,
            handleSubmit
        })
    
}

export default Overview