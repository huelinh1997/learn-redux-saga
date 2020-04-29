import React, { Component } from 'react';
import styles from './style'
import {withStyles} from '@material-ui/styles'
import LoadingIcon from '../../assets/images/loading.gif'
import { compose } from 'redux'
import {connect} from 'react-redux'

class GlobalLoading extends Component {
    render() {
        const {classes, showLoading} = this.props
        let xhtml = null;
        if(showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img src={LoadingIcon} alt="loading" className={classes.icon}></img>
                </div>
            )
        }
        return xhtml
    }
}

const mapStateToProps = (state)=> {
    return {
        showLoading: state.ui.showLoading
    }
}

const withConnect = connect(mapStateToProps, null)

export default compose(
    withStyles(styles),
    withConnect
)(GlobalLoading)
