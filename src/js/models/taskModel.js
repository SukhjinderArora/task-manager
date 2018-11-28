let data = [];

export const saveTask = (taskDesc) => {
  let taskID;
  if (data.length === 0) {
    taskID = 0;
  } else {
    taskID = data[data.length - 1].taskID + 1;
  }
  const task = {
    taskID,
    taskDesc,
    status: false,
  };
  data.push(task);
  return task;
};

export const deleteTask = (taskID) => {
  const len = data.length;
  data = data.filter(task => task.taskID !== taskID);
  console.log(data);
  return data.length !== len;
};
