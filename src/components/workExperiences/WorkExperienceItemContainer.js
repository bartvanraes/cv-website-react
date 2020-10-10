import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


function WorkExperienceItemContainer(props) {
    console.log(props)
    return (
        <Card>
            <CardContent>
                <Typography>
                    {props.item.company}
                </Typography>                
            </CardContent>
        </Card>
    )
}

export default WorkExperienceItemContainer