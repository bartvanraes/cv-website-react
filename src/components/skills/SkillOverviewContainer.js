import React from 'react'
import Grid from '@material-ui/core/Grid'
import SkillItem from './SkillItemComponent'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CategoryType from 'enums/CategoryType'

function showSkills(skills, categoryType) {
    let title = ''
    switch (categoryType) {
        case CategoryType.PROGRAMMING_SKILL:
            title = 'Programming Skills'
            break
        case CategoryType.METHODOLOGY:
            title = 'Methodology'
            break
        case CategoryType.SOFTWARE:
            title = 'Software'
            break
    }
    const titleElement = <Grid item xs={12} key={title}>
            <h2>{title}</h2>                    
    </Grid>

    if (skills.length === 0)  {
        return
    }

    let returnVal = []
    let returnSkills = skills.map((skill) => <Grid item xs={3} key={skill.name}><SkillItem key={skill.name} item={skill}></SkillItem></Grid>)

    returnVal.push(titleElement)
    returnVal.push(returnSkills)

    return returnVal
}

const useStyles = makeStyles(theme => ({
    filterStyle: {
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    }
}))

function SkillOverviewContainer(props) {
    const classes = useStyles()
    return (
        <div>            
            <Grid container spacing={3}> 
                <Grid item xs={12}>
                    <Paper elevation={3} >
                        <FormGroup row>
                            <FormControl className={classes.filterStyle}>
                                <TextField 
                                    label="Filter by name" 
                                    value={props.skills.filter.name}
                                    onChange={props.changeFilter}
                                    name="name"
                                />
                            </FormControl>
                            
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={props.skills.filter.professionalOnly} 
                                        onChange={props.changeFilter} 
                                        name="professionalOnly"
                                        color="primary" />}
                                        label="Professional only"
                            />
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={props.skills.filter.handsonOnly}
                                    onChange={props.changeFilter}
                                    name="handsonOnly"
                                    color="primary"
                                />
                                }
                                label="Hands-on experience"
                            />
                            <FormControl>
                            <InputLabel htmlFor="category-native-helper">Category</InputLabel>
                                <NativeSelect
                                    value={props.skills.filter.category}
                                    onChange={props.changeFilter}
                                    inputProps={{
                                        name: 'category',
                                        id: 'category-native-helper',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={CategoryType.PROGRAMMING_SKILL}>Programming skills</option>
                                    <option value={CategoryType.METHODOLOGY}>Methodologies</option>
                                    <option value={CategoryType.SOFTWARE}>Software</option>
                                </NativeSelect>
                                <FormHelperText>Select skill category</FormHelperText>
                            </FormControl>
                        </FormGroup>
                    </Paper>    
                </Grid>
                
                {showSkills(props.skills.displayedProgrammingSkills, CategoryType.PROGRAMMING_SKILL)} 
                
                {showSkills(props.skills.displayedMethodologySkills, CategoryType.METHODOLOGY)} 
                
                {showSkills(props.skills.displayedSoftwareSkills, CategoryType.SOFTWARE)}            
            </Grid>
        </div>        
    )
}

export default SkillOverviewContainer