import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#00796B",
        secondary: "green",
        error: 'red',
        textColor: "#ffffff"
    },
    typography: {
        fontFamily: "Roboto",
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#00796B",
        border: "#795548",
        textColor: "white"
    }
})

export default theme
