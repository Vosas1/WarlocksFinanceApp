import { createTheme } from '@mui/material/styles';

// Create a custom theme using MUI's createTheme function
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',  // Primary color (blue)
        },
        secondary: {
            main: '#dc004e',  // Secondary color (red)
        },
    },
});

export default theme;
