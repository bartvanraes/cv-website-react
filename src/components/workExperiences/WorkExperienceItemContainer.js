import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import formatDate from 'helpers/formatDate'
import { makeStyles } from '@material-ui/core'
import formatCompanyName from 'helpers/formatCompanyName'
import { showTechnologies, showTeamSize, renderProjectManagement } from 'components/shared/workExperienceRenderer'


const useStyles = makeStyles(theme => ({
    typeographyStyleTitle: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(2)
    },
    typeographyStyleParagraph: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        whiteSpace: 'pre-line'
    },
    cardStyle: {
        paddingTop: theme.spacing(2)
    }
}))

function WorkExperienceItemContainer(props) {
    const classes = useStyles()
    let projectManagement = renderProjectManagement(props.item.projectManagement, classes)    

    return (
        <Card className={classes.cardStyle} elevation={3}>
            <CardContent>
                <Grid 
                    container 
                    justify="space-between" 
                    spacing={3}> 
                    <Typography variant="h5" className={classes.typeographyStyleParagraph}>
                        {props.item.position} - {formatCompanyName(props.item)}
                    </Typography>
                    <Typography color="textSecondary" className={classes.typeographyStyleParagraph}>
                        {formatDate(props.item.startDate)} - {formatDate(props.item.endDate)}
                    </Typography>                
                </Grid>
                <br />
                <Typography color="textSecondary" variant="subtitle1" className={classes.typeographyStyleTitle}>
                    Outline
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {props.item.outline}
                </Typography> 
                <br />
                <Typography color="textSecondary" variant="subtitle1" className={classes.typeographyStyleTitle}>
                    Key responsibilities
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {props.item.responsibilities}
                </Typography>
                <br />
                <Typography color="textSecondary" variant="subtitle1" className={classes.typeographyStyleTitle}>
                    Key Achievements/Projects
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {props.item.projects}
                </Typography>
                <br />
                <Typography color="textSecondary" variant="subtitle1" className={classes.typeographyStyleTitle}>
                    Technologies
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {showTechnologies(props.item.skills)}
                </Typography>
                {projectManagement}
                <br />
                <Typography color="textSecondary" variant="subtitle1" className={classes.typeographyStyleTitle}>
                    Team Size
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {showTeamSize(props.item.teamSize)}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WorkExperienceItemContainer