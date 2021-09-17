import React from 'react'
import { Card, Grid, CardContent, Typography, makeStyles } from '@material-ui/core'

function formatMonths(months) {
    if (months === 1) {
        return '1 month'
    }
    if (months <= 11) {
        return `${months.toLocaleString()} months`
    }

    if (months === 12) {
        return '1 year'
    }

    return `${(Math.round(months * 2 / 12) / 2).toLocaleString()} years`
}

const useStyles = makeStyles((theme) => ({
    experienceGrid: {
        marginTop: theme.spacing(0.1),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1),
        alignItems: 'baseline'

    }
}))

function SkillItemContainer(props) {
    const classes = useStyles()
    return (
        <Card elevation={3}>
            <CardContent>
                <Typography>
                    {props.item.name}
                </Typography>
                { props.item.months > 0 ? 
                    <Grid 
                    container 
                    justify="flex-start" 
                    spacing={3}
                    className={classes.experienceGrid}> 
                        <Typography variant="subtitle2" color="textSecondary">
                            Experience:
                        </Typography>
                        &nbsp;
                        <Typography variant="subtitle2" color="textSecondary">
                            {formatMonths(props.item.months)}
                        </Typography> 
                    </Grid>
                    : 
                    <Typography variant="subtitle2" color="textSecondary">
                        { props.item.handson ? 'Practical experience' : 'Self taught' }    
                    </Typography>}
            </CardContent>
        </Card>
    )
}

export default SkillItemContainer