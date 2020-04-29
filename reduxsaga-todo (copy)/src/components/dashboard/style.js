
const styles = (theme)=>({
  wrapper: {
    height: "100vh",
    display: "flex",
    flexDirection: "row"
  },
  wrapperContent: {
    width: "100%",
    padding: 10,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, 
  shiftLeft: {
    marginLeft: -200,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
})

export default styles
