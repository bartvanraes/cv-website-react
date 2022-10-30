import React from 'react'
import Grid from '@material-ui/core/Grid'
import SkillItem from './SkillItemComponent'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CategoryType from 'enums/CategoryType'
import SkillInterestType from 'enums/SkillInterestType'
import ExperienceType from 'enums/ExperienceType'

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
        default:
            break
    }
    const titleElement = <Grid item xs={12} key={title}>
            <Typography variant="h5">{title}</Typography>                    
    </Grid>

    if (skills.length === 0)  {
        return
    }

    let returnVal = []
    let returnSkills = skills.map((skill) => <Grid item xs={6} md={3} key={skill.name}><SkillItem key={skill.name} item={skill}></SkillItem></Grid>)

    returnVal.push(titleElement)
    returnVal.push(returnSkills)

    return returnVal
}

const useStyles = makeStyles(theme => ({
    filterStyle: {
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(2)
    },
    filterSwitchStyle: {
        marginLeft: theme.spacing(2)
    },
    filterDropDownStyle: {
        marginLeft: theme.spacing(3)
    },
    resetStyle: {
        marginLeft: theme.spacing(2)
    },
    inputStyle: {
        color: '#ffffff'//theme.palette.text.secondary
    },
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
                                    value={props.skills.filter.search}
                                    onKeyDown={props.confirmTextSearch}
                                    onChange={props.changeFilter}
                                    name="search"
                                />
                            </FormControl>
                            
                            <FormControl className={classes.filterDropDownStyle}>
                                <InputLabel htmlFor="category-native-helper">Experience</InputLabel>
                                <NativeSelect
                                    value={props.skills.filter.experience}
                                    onChange={props.changeFilter}
                                    inputProps={{
                                        name: 'experience',
                                        id: 'experience-native-helper',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={ExperienceType.PROFESSIONAL}>Professional experience only</option>
                                    <option value={ExperienceType.HANDS_ON}>Hands-on experience (not professional)</option>
                                    <option value={ExperienceType.SELF_TAUGHT}>Self taught (hands-off)</option>
                                </NativeSelect>
                                <FormHelperText>Select skill category</FormHelperText>
                            </FormControl>
                            <FormControl className={classes.filterDropDownStyle}>
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
                            <FormControl className={classes.filterDropDownStyle}>
                                <InputLabel htmlFor="category-native-helper">Interest level</InputLabel>
                                <NativeSelect
                                    value={props.skills.filter.interestLevel}
                                    onChange={props.changeFilter}
                                    inputProps={{
                                        name: 'interestLevel',
                                        id: 'interested-native-helper',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={SkillInterestType.HIGHLY_INTERESTED}>I'm highly interested in these</option>
                                    <option value={SkillInterestType.AVOID}>Don't contact me for these</option>
                                </NativeSelect>
                                <FormHelperText>Filter by interest level</FormHelperText>
                            </FormControl>
                            <Button color="secondary" className={classes.resetStyle} onClick={props.resetFilter}>Reset</Button>     
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