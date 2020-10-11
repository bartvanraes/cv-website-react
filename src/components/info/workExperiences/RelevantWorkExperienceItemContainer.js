import React from 'react'
import formatDate from 'helpers/formatDate'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import formatCompanyName from 'helpers/formatCompanyName'

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

function RelevantWorkExperienceContainer(props) {
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
            </CardContent>
        </Card>
    )
}

export default RelevantWorkExperienceContainer