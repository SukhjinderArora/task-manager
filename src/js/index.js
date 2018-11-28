import '../styles/main.scss';

import elements from './views/base';
import * as taskView from './views/taskView';
import * as taskModel from './models/taskModel';

// Task Controller
const getTaskID = event => event.target.parentNode.parentNode.parentNode.id;

// Add a task
const addTask = () => {
  // Get input from input field
  const taskDesc = taskView.getInput();
  if (taskDesc.length === 0) return;

  // Save the data into model
  const task = taskModel.saveTask(taskDesc);

  // update UI
  taskView.renderTask(task);

  // clear input
  taskView.clearInput();
};

// Delete a task
const deleteTask = (event) => {
  // get task id
  const taskID = getTaskID(event);
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

// Mark task as done
const markTaskDone = (event) => {
  const taskID = getTaskID(event);

  if (taskID) {
    const ID = parseInt(taskID.split('-')[1], 10);
    // set the status true in model
    taskModel.markTaskasDone(ID);

    // Update the UI
    taskView.markTaskDoneUI(taskID);
  }
};

const setupEventListeners = () => {
  elements.submitBtn.addEventListener('click', addTask);
  elements.taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  elements.taskList.addEventListener('click', (event) => {
    if (event.target.className === 'icon icon--remove') {
      deleteTask(event);
    } else if (event.target.className === 'icon icon--check') {
      markTaskDone(event);
    }
  });
};

const init = () => {
  setupEventListeners();
  if (localStorage.getItem('taskList')) {
    // get the data from local storage
    const data = JSON.parse(localStorage.getItem('taskList'));
    // updates model
    taskModel.updateModelData(data);
    // render UI
    taskView.renderTaskList(data);
  }
};

init();
