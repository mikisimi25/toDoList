import './App.scss';
import React,{Component} from 'react';
import Task from './Task/Task';
import FormTask from './FormTask/FormTask';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const task = this.props.tasks.map(task => <Task key={task.id} {...task} />);

    return (
      <main className={'taskContainer'}>
        <h1>TO DO LIST</h1>
        <FormTask />
        <ul>
          <h1>Desarrollo</h1>
          {task}
        </ul>
      </main>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    tasks: props.taskPage.tasks
  }
}

export default connect(mapStateToProps,{})(App);
