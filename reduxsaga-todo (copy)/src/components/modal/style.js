const styles = (theme)=> ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        //padding: theme.spacing(2, 4, 3),
        outline: "none",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    header: {
        background: "#f50057",
        color: "#ffffff",
        padding: theme.spacing(2, 4),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "#ffffff",
        fontWeight: 700,
        textTransform: "capitalize"
    },
    icon: {
        cursor: "pointer",
        fontSize: 24
    }
})
export default styles