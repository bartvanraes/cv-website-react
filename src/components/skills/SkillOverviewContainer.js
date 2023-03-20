import React from 'react'
import Grid from '@mui/material/Grid'
import SkillItem from './SkillItemComponent'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import NativeSelect from '@mui/material/NativeSelect'
import FormHelperText from '@mui/material/FormHelperText'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import CategoryType from '@/enums/CategoryType'
import SkillInterestType from '@/enums/SkillInterestType'
import ExperienceType from '@/enums/ExperienceType'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/themes/cvTheme'

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

function SkillOverviewContainer(props) {
    return (
        <ThemeProvider theme={theme}>
            <div>            
                <Grid container spacing={3}> 
                    <Grid item xs={12}>
                        <Paper elevation={3} >
                            <FormGroup row>
                                <FormControl sx={{
                                    marginBottom: theme.spacing(2),
                                    marginLeft: theme.spacing(3),
                                    marginRight: theme.spacing(2)
                                }}>
                                    <TextField 
                                        label="Filter by name"
                                        value={props.skills.filter.search}
                                        onKeyDown={props.confirmTextSearch}
                                        onChange={props.changeFilter}
                                        name="search"
                                        variant="standard"
                                    />
                                </FormControl>
                                
                                <FormControl sx={{
                                    marginLeft: theme.spacing(3)
                                }}>
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
                                <FormControl sx={{
                                    marginLeft: theme.spacing(3)
                                }}>
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
                                <FormControl sx={{
                                    marginLeft: theme.spacing(3)
                                }}>
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
                                <Button color="secondary" sx={{
                                    marginLeft: theme.spacing(2)
                                }} onClick={props.resetFilter}>Reset</Button>     
                            </FormGroup>
                        </Paper>    
                    </Grid>                
                    {showSkills(props.skills.displayedProgrammingSkills, CategoryType.PROGRAMMING_SKILL)}                 
                    {showSkills(props.skills.displayedMethodologySkills, CategoryType.METHODOLOGY)}                 
                    {showSkills(props.skills.displayedSoftwareSkills, CategoryType.SOFTWARE)}            
                </Grid>
            </div>  
        </ThemeProvider>      
    )
}

export default SkillOverviewContainer