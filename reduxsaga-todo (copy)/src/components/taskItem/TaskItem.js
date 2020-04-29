import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'
import styles from './TaskItemStyle'
import {withStyles, Box} from "@material-ui/core";

class TaskItem extends Component {
    render() {
        let {task, status, classes, handleEdit, handleDelete} = this.props
        return (
            <Box mt={2}>
                <Card>
                  <CardContent>
                      <div className={classes.title}>
                        <Typography variant="h6" gutterBottom>{task.title}</Typography>
                        <Typography variant="body2" gutterBottom>{status}</Typography>
                      </div>
                      <p>{task.des}</p>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                      <Fab color="primary" aria-label="edit" size="small" onClick={handleEdit}>
                          <Icon fontSize="small">edit</Icon>
                      </Fab>
                      <Fab color="secondary" aria-label="delete" size="small" onClick={handleDelete}>
                          <Icon fontSize="small">delete</Icon>
                      </Fab>
                  </CardActions>
              </Card>
            </Box>
        );
    }
}

export default withStyles(styles)(TaskItem);
