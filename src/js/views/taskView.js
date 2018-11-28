import elements from './base';
import imgCheck from '../../assets/arrows_square_check.svg';
import imgRemove from '../../assets/arrows_square_remove.svg';


export const getInput = () => elements.taskInput.value;

export const renderTask = (task) => {
  const markup = `
    <div class="task" id ="task-${task.taskID}">
      <p class="task__description">
        ${task.taskDesc}
      </p>
      <div class="icon-box">
        <button class="btn-icon btn-icon--done">
          <img src="${imgCheck}" alt="task complete" class="icon icon--check">
        </button>
        <button class="btn-icon btn-icon--remove">
          <img src="${imgRemove}" alt="task remove" class="icon icon--remove">
        </button>
      </div>
      <div>

      </div>
    </div>  
  `;
  elements.taskList.insertAdjacentHTML('beforeend', markup);
};

export const deleteTaskUI = (taskID) => {
  const task = document.getElementById(taskID);
  task.parentNode.removeChild(task);
};
