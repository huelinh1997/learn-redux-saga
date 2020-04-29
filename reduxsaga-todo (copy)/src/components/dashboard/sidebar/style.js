const styles = (theme)=>({
  drawerPaper: {
    width: 200,
    maxWidth: 200,
    height: '100%',
    position: 'relative',
    zIndex: 10
  },
  menuLink: {
    textDecoration: 'none',
    color: "#000000",
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: "#dedada",
    },
  }
})

export default styles
