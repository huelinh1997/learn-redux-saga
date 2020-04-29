import React, {Component} from 'react';
import AddIcon from '@material-ui/icons/Add'
import TaskList from '../../components/taskList/TaskList'
import TaskForm from '../taskForm/TaskForm'
import {Box, Button, withStyles} from '@material-ui/core/';
import {connect} from "react-redux";
import {bindActionCreators, compose} from 'redux';
import * as taskAction from '../../actions/action'
import * as modalAction from '../../actions/modal'
import SearchBox from '../../components/searchBox/searchBox'
import styles from './style'

class TaskBoard extends Component {
    handleOpen = () => {
        const {modalActionCreator, taskActionCreator} = this.props
        const {setTaskEditing} = taskActionCreator
        setTaskEditing(null)
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreator
        showModal();
        changeModalTitle('Add new');
        changeModalContent(<TaskForm/>)
    }

    loadData = () => {
        const {taskActionCreator} = this.props
        const {fetchListTask} = taskActionCreator
        fetchListTask()
    }

    handleChange = (e) => {
        const {value} = e.target
        const {taskActionCreator} = this.props
        const {filterTask} = taskActionCreator
        filterTask(value)
    }

    componentDidMount() {
        const {taskActionCreator} = this.props
        const {fetchListTask} = taskActionCreator
        fetchListTask()
    }

    handleEditTask = (task) => {
      const {taskActionCreator, modalActionCreator} = this.props
      const {setTaskEditing} = taskActionCreator
      setTaskEditing(task)

      const {showModal, changeModalTitle, changeModalContent} = modalActionCreator
      showModal();
      changeModalTitle('Update task');
      changeModalContent(<TaskForm/>)
    }

    showModalDeleteTask = (task) => {
      const {modalActionCreator, classes} = this.props

      const {showModal, hideModal, changeModalTitle, changeModalContent} = modalActionCreator
      showModal();
      changeModalTitle('Delete task');
      changeModalContent(
        <div className={classes.modalDelete}>
          <div className={classes.modalConfirmDelete}>
          Are you sure you want to delete <span className={classes.modalTitleDelete}>{task.title}</span>?
          </div>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="outlined" color="secondary" onClick={hideModal}>Cancel</Button>
            </Box>
            <Box ml={1}>
              <Button variant="outlined" color="primary" onClick={()=> this.handleDeleteTask(task)}>Delete</Button>
            </Box>
          </Box>
        </div>)
    }

    handleDeleteTask = task => {
      const {id} = task;
      const{taskActionCreator } = this.props;
      const {deleteTask} = taskActionCreator
      console.log('deletetask', deleteTask)
      deleteTask(id)
    }

    render() {
       // const {open} = this.state
        const {listTask} = this.props
        return (
          <Box mt={2} mb={2}>
              <Box display="flex">
                <Button variant="contained" color="primary" onClick={this.handleOpen}>
                    <AddIcon/> Add new tasks
                </Button>

                <Box ml={1}>
                  <Button variant="contained" color="primary" onClick={this.loadData}>
                      Load data
                  </Button>
                </Box>
              </Box>
              

              <SearchBox handleChange={this.handleChange}/>
              {/* <TaskForm open={open} onClose={this.handleClose}/> */}
              <TaskList listTask={listTask}
                        handleEdit={this.handleEditTask}
                        handleDelete={this.showModalDeleteTask}/>
          </Box>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        listTask: state.task.listTask
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        taskActionCreator: bindActionCreators(taskAction, dispatch),
        modalActionCreator: bindActionCreators(modalAction, dispatch)
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withStyles(styles),
  withConnect
)(TaskBoard);

