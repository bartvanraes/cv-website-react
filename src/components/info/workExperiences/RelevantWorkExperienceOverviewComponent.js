import {useContext} from 'react'
import RelevantWorkExperienceOverviewContainer from './RelevantWorkExperienceOverviewContainer'
import {InfoOverviewContext} from '@/context/InfoOverviewContext'

const RelevantWorkExperienceOverview = () => {
    const {infoOverview} = useContext(InfoOverviewContext)

    return RelevantWorkExperienceOverviewContainer({
        infoOverview
    })
}

export default RelevantWorkExperienceOverview