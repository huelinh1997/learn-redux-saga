import React, { Component } from 'react';
import styles from './style'
import {withStyles} from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer';
import {ADMIN_ROUTER} from '../../../constants/route'
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class Sidebar extends Component {
  // toggleDrawer = (value) => {
  //   this.setState({
  //     open: value
  //   })
  // }

  renderList(){
    const {classes} = this.props
    let xhtml = null;

    xhtml = <div className={classes.list}>
      <List component="div">
        {ADMIN_ROUTER.map(item => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              exact={item.exact}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
            >
              <ListItem className={classes.menuItem} button>
                {item.name}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </div>
    return xhtml
  }

  render() {
    const {classes, showSidebar} = this.props
    return (
      <Drawer open={showSidebar}
              onClose={()=> this.props.onToggleSibar(false)}
              classes={{
                paper: classes.drawerPaper
              }}
              variant="persistent">
        {this.renderList()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar)
