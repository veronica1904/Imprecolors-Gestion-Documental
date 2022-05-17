import { createTheme } from '@mui/material/styles';
import colors from './colors.json'

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary 
        },
        secondary: {
            main: colors.secondary
        },
        error: {
            main: colors.error,
        },
        background: {
            main: colors.backgroundLight
        }
    },
    typography: {
        fontFamily: "Josefin Sans",
        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: colors.white,
                    color: colors.textDark,
                    boxShadow: "none",
                }
            }
        }
    },
    shape: {
        borderRadius: 15
    }
})
export default theme