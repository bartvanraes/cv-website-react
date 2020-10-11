import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import RelevantWorkExperienceItem from './RelevantWorkExperienceItemComponent'

const useStyles = makeStyles(theme => ({
    relevantWorkExperienceItemStyle: {
        
    },
    containerStyle: {
        marginBottom: theme.spacing(2)
    }
}))

const showWorkExperiences = (workExperiences, classes) => {
    return workExperiences.map((work) => <Grid item xs={12} key={work.startDate}>
                                            <RelevantWorkExperienceItem key={work.startDate} item={work} className={classes.relevantWorkExperienceItemStyle}>
                                        </RelevantWorkExperienceItem></Grid>)
}

function RelevantWorkExperienceOverviewContainer(props) {
    const classes = useStyles()
    return (
        <Grid container spacing={3} className={classes.containerStyle}> 

                {showWorkExperiences(props.infoOverview.relevantWorkExperiences, classes)}

        </Grid>
    )
}

export default RelevantWorkExperienceOverviewContainer