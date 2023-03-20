import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat-Medium',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#3e6b89'
        },
        secondary: {
            main: '#3dd2cc'
        },
        text: {
            primary: '#3e6b89',
            secondary: '#3dd2cc'
        },
        background: {
            default: '#f5f5f5',
            paper: {
                background: '#f5f5f5'
            }
        }
    },
    components: {
        MuiInput: {
            styleOverrides: {
                input: {
                "&::placeholder": {
                    color: "gray"
                },
                color: '#3e6b89', // if you also want to change the color of the input, this is the prop you'd use
                }
            }
        },
        MuiFormLabel: { 
            styleOverrides: {
                root: { 
                    color: '#3e6b89' 
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    background: '#3e6b89'
                },
                root: {
                    background: '#DEF7F7'
                }
            }
        }
    }     
})

theme.typography.h4 = {
    ...theme.typography.h4,
    fontSize: '1.6rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        },
}

theme.typography.h5 = {
    ...theme.typography.h5,
    fontSize: '1.5rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
        },
}

export default theme