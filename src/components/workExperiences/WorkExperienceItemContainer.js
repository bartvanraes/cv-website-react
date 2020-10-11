import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const formatDate = (dateStr) => {
    // couldn't quickly find a good method or library 
    const [day, month, year] = dateStr.split('/')
    let monthName = ''
    switch (month) {
        case '01':
            monthName = 'Jan'
            break
        case '02':
            monthName = 'Feb'
            break
        case '03':
            monthName = 'Mar'
            break
        case '04':
            monthName = 'Apr'
            break
        case '05':
            monthName = 'May'
            break
        case '06':
            monthName = 'Jun'
            break
        case '07':
            monthName = 'Jul'
            break
        case '08':
            monthName = 'Aug'
            break
        case '09':
            monthName = 'Sep'
            break
        case '10':
            monthName = 'Oct'
            break
        case '11':
            monthName = 'Nov'
            break
        case '12':
            monthName = 'Dec'
            break
    }

    return `${monthName} ${year}`
}

const showTechnologies = techList => {
    //return techList.map((tech) => `${tech}, `)
    return techList.join(', ')
}

const formatCompanyName = workExperience => {
    if (workExperience.consultancy && workExperience.consultancyCompany !== undefined) {
        return `${workExperience.company} (consultancy via ${workExperience.consultancyCompany})`
    }

    if (workExperience.temporary) {
        return `${workExperience.company} (temporary contract)`
    }

    return workExperience.company
}

const useStyles = makeStyles(theme => ({
    typeographyStyleTitle: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(2)
    },
    typeographyStyleParagraph: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        whiteSpace: 'pre-line'
    }
}))

function WorkExperienceItemContainer(props) {
    const classes = useStyles()
    return (
        <Card>
            <CardContent>
                <Grid 
                    container 
                    justify="space-between" 
                    spacing={3}> 
                    <Typography variant="h5" className={classes.typeographyStyleParagraph}>
                        {formatCompanyName(props.item)}
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
                    Key Responsabilities
                </Typography>
                <Typography variant="subtitle1" className={classes.typeographyStyleParagraph}>
                    {props.item.responsabilities}
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
            </CardContent>
        </Card>
    )
}

export default WorkExperienceItemContainer