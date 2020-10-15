import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f51b5',
            light: '#6573c3',
            dark: '#2c387e',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#039be5',
            light: '#35afea',
            dark: '#026ca0'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    scrollBehavior: 'smooth'
                },
                '*::-webkit-scrollbar': {
                    width: '0.5em'
                },
                '*::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                    borderRadius: '22px'
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: '#6573c3',
                    borderRadius: '22px',
                    '&:hover': {
                        background: '#3f51b5'
                    }
                },
                '*::selection': {
                    background: '#026CDF',
                    color: 'white'
                },
                '*::moz-selection': {
                    background: '#026CDF',
                    color: 'white'
                }
            }
        },
        MuiButton: {
            root: {
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 5,
                '&:disabled': {
                    cursor: 'not-allowed',
                    pointerEvents: 'auto'
                }
            }
        }
    }
});
export const customTheme = responsiveFontSizes(theme);
