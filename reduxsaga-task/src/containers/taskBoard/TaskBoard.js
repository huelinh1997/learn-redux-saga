import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core'
import styles from './styles'

class TaskBoard extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.wrapperTaskBoard}>
                <Button>Add new task</Button>
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);