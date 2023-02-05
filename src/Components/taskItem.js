import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style.ts';

const TaskItem = ({ task, handleTaskDelete }) => {
  const navigate = useNavigate();

  // This is a function that will be called when a task is clicked
  // it sets the task id as a route parameter and redirects to the create page

  const handleEditClick = (id) => {
    navigate(`/create/${task.id}`);
  };

  return (
    <>
      <S.TaskContainer>
        <S.TaskName>{task.name}</S.TaskName>
        <S.TaskDescription>{task.description}</S.TaskDescription>
        <S.DateContainer>
          <S.TaskDate>Date of creation : {task.dateCreated}</S.TaskDate>
        </S.DateContainer>
      </S.TaskContainer>
      <S.TaskOptions>
        <S.optionButton
          className="delete"
          onClick={() => {
            handleTaskDelete(task.id);
          }}
        >
          Delete
        </S.optionButton>
        <S.optionButton className="edit" onClick={handleEditClick}>
          Edit
        </S.optionButton>
      </S.TaskOptions>
    </>
  );
};

export default TaskItem;
