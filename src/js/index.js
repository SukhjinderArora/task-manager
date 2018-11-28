import '../styles/main.scss';

import elements from './views/base';
import * as taskView from './views/taskView';
import * as taskModel from './models/taskModel';

// Task Controller

const addTask = () => {
  // Get input from input field
  const taskDesc = taskView.getInput();
  if (taskDesc.length === 0) return;

  // Save the data into model
  const task = taskModel.saveTask(taskDesc);

  // update UI
  taskView.renderTask(task);
};

const deleteTask = (event) => {
  // get task id
  const taskID = event.target.parentNode.parentNode.parentNode.id;
  if (taskID) {
    const ID = parseInt(taskID.split('-')[1], 10);
    // delete task from model
    const isTaskDeleted = taskModel.deleteTask(ID);
    if (isTaskDeleted) {
      // delete task from UI
      taskView.deleteTaskUI(taskID);
    }
  }
};

elements.submitBtn.addEventListener('click', addTask);
elements.taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

elements.taskList.addEventListener('click', deleteTask);
