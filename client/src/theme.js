import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    /* Palette settings */
    palette: {
        primary: {
            main: '#6a1b9a'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            default: '#1c1c1c',
            paper: '#424242'
        },
        text: {
            primary: '#ffffff',
            secondary: '#bdbdbd'
        },
    },
    /* Typography settings */
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontSize: '3rem',
            color: '#ffffff'
        },
        h2: {
            fontSize: '2.5rem',
            color: '#ffffff',
        },
        h3: {
            fontSize: '2rem',
            color: '#ffffff',
        },
        body1: {
            color: '#ffffff',
        },
        body2: {
            color: '#bdbdbd',
        },
    },
    /* Component style overrides */
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: '#6a1b9a'
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#6a1b9a',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#4a148c',
                    },
                },
            },
        },
    },
});

export default theme;
