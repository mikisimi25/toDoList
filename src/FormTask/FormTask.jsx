import React from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {addTaskAction} from '../Redux/taskReducer';

const addTask = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'New Task'} name={'task'} component={'input'} /> 
            <button>Add Task</button>
        </form>
    )    
}

const LoginReduxForm = reduxForm({form: 'task'})(addTask);

const FormTask = ({addTaskAction}) => {

    return (
        <LoginReduxForm onSubmit={addTaskAction}/>
    );
}

export default connect('',{addTaskAction})(FormTask);