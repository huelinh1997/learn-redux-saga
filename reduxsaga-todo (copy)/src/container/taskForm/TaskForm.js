import React, { Component } from "react";
import styles from "./TaskFormStyle";
import { withStyles, Grid, Box, MenuItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import {compose, bindActionCreators} from 'redux'
import * as modalAction from '../../actions/modal'
import * as taskAction from '../../actions/action'
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../components/formHelper/textField/TextField'
import SelectStatus from '../../components/formHelper/select/SelectStatus'
import validate from './validate'

class TaskForm extends Component {
  handleSubmitForm = data => {
    const {taskActionCreators, taskEditing} = this.props
    const {addTask, updateTask} = taskActionCreators
    const {title, des, status} = data
    if(taskEditing && taskEditing.id) {
      updateTask(title, des, status)
    } else {
      addTask(title, des)
    }
  }

  handleStatusSelection = ()=> {
    let xhtml = null;
    const {taskEditing, classes} = this.props;
    if(taskEditing && taskEditing.id) {  //render select status when update
      xhtml = (
        <Field
          id="standard-status"
          label="status"
          name="status"
          className={classes.select}
          component={SelectStatus}>
            <MenuItem value={0}>Ready</MenuItem>
            <MenuItem value={1}>In Progress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
        </Field>
      )
    }
    return xhtml;
  }

  render() {
    let { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props;
    const { hideModal } = modalActionCreators
    return (
      <form className={classes.form} onSubmit={handleSubmit(this.handleSubmitForm)}>
            <Grid container>
              <Grid item md={12}>
                <Field
                  id="standard-title"
                  label="Title"
                  name="title"
                  className={classes.textField}
                  component={renderTextField}>
                </Field>
              </Grid>

              <Grid item md={12}>
                <Field
                    id="standard-des"
                    label="Description"
                    name="des"
                    className={classes.textField}
                    multiline
                    component={renderTextField}/>
              </Grid>

              {this.handleStatusSelection()}

              <Grid item md={12}>
                <Box display="flex" mt={1} flexDirection="row-reverse">
                  <Button color="primary" type="submit" disabled={invalid || submitting}>Save</Button>
                  <Button color="secondary" onClick={hideModal}>Cancel</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
    );
  }
}

const mapDispatchToProps = (dispatch)=> ({
  modalActionCreators: bindActionCreators(modalAction, dispatch),
  taskActionCreators: bindActionCreators(taskAction, dispatch)
})

const mapStateToProps = (state) => ({
  taskEditing: state.task.taskEditing,
  initialValues: {
    title: state.task.taskEditing ? state.task.taskEditing.title : null,
    des: state.task.taskEditing ? state.task.taskEditing.des : null,
    status: state.task.taskEditing ? state.task.taskEditing.status : null
  }
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

const withReduxForm = reduxForm({
  form: 'TASK_MANAGEMENT',
  validate  // validate: validate
})
export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
