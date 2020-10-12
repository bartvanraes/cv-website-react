import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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

    return `${(months / 12).toLocaleString()} years`

}

function SkillItemContainer(props) {
    return (
        <Card elevation={3}>
            <CardContent>
                <Typography>
                    {props.item.name}
                </Typography>
                { props.item.months > 0 ? 
                    <Typography variant="subtitle2" color="textSecondary">
                        Exp: {formatMonths(props.item.months)}
                    </Typography> 
                    : 
                    <Typography variant="subtitle2" color="textSecondary">
                        { props.item.handson ? 'Practical experience' : 'Self taught' }    
                    </Typography>}
            </CardContent>
        </Card>
    )
}

export default SkillItemContainer