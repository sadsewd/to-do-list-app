import React from 'react';
import TaskItem from './taskItem';

const TaskList = ({ taskList, handleTaskDelete }) => {
  return (
    <>
      {taskList && taskList.length !== 0 ? (
        <>
          {taskList.map((task) => {
            return (
              <div key={task.id}>
                <TaskItem task={task} handleTaskDelete={handleTaskDelete} />
              </div>
            );
          })}
        </>
      ) : (
        <div>No tasks to show</div>
      )}
    </>
  );
};

export default TaskList;
