import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import SkillItem from 'components/skills/SkillItemComponent'

const showSkills = (skills, classes) => {
    return skills.map((skill) => <Grid item xs={6} key={skill.name} className={classes.skillItemStyle}><SkillItem key={skill.name} item={skill}></SkillItem></Grid>)
}

const useStyles = makeStyles((theme) => ({
    skillItemStyle: {
        paddingBottom: theme.spacing(1)
    }
}))

function RelevantSkillOverviewContainer(props) {
    const classes = useStyles()
    return (
        <Grid container spacing={3}> 
            {showSkills(props.infoOverview.relevantSkills, classes)}
        </Grid>
    )
}

export default RelevantSkillOverviewContainer