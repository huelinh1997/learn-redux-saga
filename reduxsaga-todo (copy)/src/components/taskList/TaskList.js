import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {status} from "../../constants";
import styles from './StyleTaskList'
import {withStyles} from "@material-ui/core";
import TaskItem from '../taskItem/TaskItem'

class TaskList extends Component {
    render() {
        const {classes, listTask, handleEdit, handleDelete} = this.props
        return (
            <Grid container spacing={3}>
                {
                    status.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value)
                        return (
                            <Grid item md={4} xs={12} key={index}>
                                <Box mt={2} mb={2}><div className={classes.status}>{status.label}</div></Box>
                                <div className={classes.wrapListTask}>
                                    {
                                        taskFilter.map((task, index) => {

                                            return <TaskItem key={index}
                                                             task={task}
                                                             status={status.label}
                                                             handleEdit={()=>handleEdit(task)}
                                                             handleDelete={()=>handleDelete(task)}
                                                             ></TaskItem>
                                        })
                                    }
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);
