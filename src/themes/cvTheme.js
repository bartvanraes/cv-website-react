import { createMuiTheme } from '@material-ui/core/styles'
const cvTheme = createMuiTheme({
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
            secondary: '#3dd2cc',
        },
        background: {
            default: '#f5f5f5',
            paper: {
                background: '#f5f5f5'
            }
        }
    },
    overrides: {
        MuiInput: {
          input: {
            "&::placeholder": {
              color: "gray"
            },
            color: '#3e6b89', // if you also want to change the color of the input, this is the prop you'd use
          }
        },
        MuiFormLabel: { 
            root: { 
                color: '#3e6b89' 
            }
        },
        MuiTabs: {
            indicator: {
                background: '#3e6b89'
            },
            root: {
                background: '#DEF7F7',                
            }
        }       
    }
})

cvTheme.typography.h4 = {
    ...cvTheme.typography.h4,
    fontSize: '1.6rem',
    [cvTheme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        },
}

cvTheme.typography.h5 = {
    ...cvTheme.typography.h5,
    fontSize: '1.5rem',
    [cvTheme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
        },
}

export default cvTheme