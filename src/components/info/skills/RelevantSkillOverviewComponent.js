import {useContext} from 'react'
import RelevantSkillOverviewContainer from './RelevantSkillOverviewContainer'
import {InfoOverviewContext} from '@/context/InfoOverviewContext'

const RelevantSkillOverview = () => {
    const {infoOverview} = useContext(InfoOverviewContext)

    return RelevantSkillOverviewContainer({
        infoOverview
    })
}

export default RelevantSkillOverview