import React, { Component } from 'react';
import styles from './style'
import {withStyles} from '@material-ui/styles'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import * as uiAction from '../../actions/ui'
import {bindActionCreators, compose} from 'redux';
import {connect} from "react-redux";
import cn from 'classnames'

class DashBoard extends Component {
  handerOnToggleSidebar = (value) => {
    const {uiActionCreators} = this.props;
    const {showSidebar, hideSidebar} = uiActionCreators
    if(value == true) {
      showSidebar()
    } else hideSidebar()
  }

  render() {
    const {classes, children , name, showSidebar} = this.props
    console.log('name indashboard:', name)
    return (
      <div className={classes.dashboard}>
        <Header name={name} showSidebar={showSidebar} onToggleSibar={this.handerOnToggleSidebar} />
        <div className={classes.wrapper}>
          <Sidebar showSidebar={showSidebar} onToggleSibar={this.handerOnToggleSidebar}/>
          <div className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: showSidebar === false
          })}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    showSidebar: state.ui.showSidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uiActionCreators: bindActionCreators(uiAction, dispatch)
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withStyles(styles),
  withConnect
)(DashBoard);
