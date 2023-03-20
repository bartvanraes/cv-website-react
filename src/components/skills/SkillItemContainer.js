import React from 'react'
import { Card, Grid, CardContent, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'

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

function SkillItemContainer(props) {

    return (
        <ThemeProvider theme={theme}>
            <Card elevation={3}>
                <CardContent>
                    <Typography>
                        {props.item.name}
                    </Typography>
                    { props.item.months > 0 ? 
                        <Grid 
                        container 
                        justify="flex-start"> 
                            <Typography variant="subtitle2" color="textSecondary">
                                Experience:
                            </Typography>
                            &nbsp;
                            <Typography variant="subtitle2" color="textSecondary">
                                {formatMonths(props.item.months)}
                            </Typography> 
                        </Grid>
                        : 
                        <Grid 
                        container 
                        justify="flex-start"> 
                            <Typography variant="subtitle2" color="textSecondary">
                                { props.item.handson ? 'Practical experience' : 'Self taught' }    
                            </Typography>
                        </Grid>}
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default SkillItemContainer