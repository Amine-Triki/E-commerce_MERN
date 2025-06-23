import {createTheme} from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#16B4F2',
        },
        secondary: {
            main: '#155FBF',
        },
    },
    typography: {
        fontFamily: 'Lemonada, Arial, sans-serif',
        h1: {
            fontSize: '2.3rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.1,
        },
        h3: {
            fontSize: '1.4rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1.3rem',
        },
    },
});

export default Theme;