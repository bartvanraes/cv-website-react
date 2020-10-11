import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import RelevantWorkExperienceItem from './RelevantWorkExperienceItemComponent'

const showWorkExperiences = (workExperiences) => {
    return workExperiences.map((work) => <Grid item xs={12} key={work.startDate}><RelevantWorkExperienceItem key={work.startDate} item={work}></RelevantWorkExperienceItem></Grid>)
}

function RelevantWorkExperienceOverviewContainer(props) {
    return (
        <Grid container spacing={3}> 
            <Grid item xs={12}>
                {showWorkExperiences(props.infoOverview.relevantWorkExperiences)}
            </Grid>
        </Grid>
    )
}

export default RelevantWorkExperienceOverviewContainer