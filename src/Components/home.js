import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style.ts";

export default function Home() {
  let taskObjArray = [];
  let taskObj;
  const navigate = useNavigate();
  let location = useLocation();

  for (let i = 0; i < localStorage.length; i++) {
    taskObj = JSON.parse(localStorage.getItem(i + 1));
    taskObjArray[i] = taskObj;
  }

  const [task, setTask] = useState(taskObjArray);

  const filtered = task.filter((task) => {
    return (
      task.taskName.toLowerCase().match(location.state.toLowerCase()) ||
      task.description.toLowerCase().match(location.state.toLowerCase()) ||
      task.date === location.state
    );
  });

  function deleteTaskLocalStorage(itemId) {
    //specified item gets removed from local storage
    localStorage.removeItem(itemId);
    //specified item gets removed from array of object used for rendering the task
    const newArr = task.filter((object) => {
      return object.id !== itemId;
    });
    setTask(newArr);
  }

  function toEdit(id, taskName, description, date) {
    navigate("/create", {
      state: {
        id: id,
        taskName: taskName,
        description: description,
        date: date,
      },
    });
  }

  if (filtered.length === 0) {
    return (
      <S.Container>
        {task.map((task, id) => {
          return (
            <div key={id}>
              <S.TaskContainer>
                <S.TaskName>{task?.taskName || ""}</S.TaskName>
                <S.TaskDescription>{task?.description || ""}</S.TaskDescription>
                <S.DateContainer>
                  <S.TaskDate>Date of creation : {task?.date || ""}</S.TaskDate>
                </S.DateContainer>
              </S.TaskContainer>
              <S.TaskOptions>
                <S.optionButton
                  className="delete"
                  onClick={() => {
                    deleteTaskLocalStorage(task.id);
                  }}
                >
                  Delete
                </S.optionButton>
                <S.optionButton
                  className="edit"
                  onClick={() => {
                    toEdit(task.id, task.taskName, task.description, task.date);
                  }}
                >
                  Edit
                </S.optionButton>
              </S.TaskOptions>
            </div>
          );
        })}
      </S.Container>
    );
  } else {
    return (
      <div>
        <S.TaskContainer>
          <S.TaskName>{filtered[0].taskName}</S.TaskName>
          <S.TaskDescription>{filtered[0].description}</S.TaskDescription>
          <S.DateContainer>
            <S.TaskDate>Date of creation : {filtered[0].date}</S.TaskDate>
          </S.DateContainer>
        </S.TaskContainer>
        <S.TaskOptions>
          <S.optionButton
            className="delete"
            onClick={() => {
              deleteTaskLocalStorage(filtered[0].id);
            }}
          >
            Delete
          </S.optionButton>
          <S.optionButton
            className="edit"
            onClick={() => {
              toEdit(
                filtered[0].id,
                filtered[0].taskName,
                filtered[0].description,
                filtered[0].date
              );
            }}
          >
            Edit
          </S.optionButton>
        </S.TaskOptions>
      </div>
    );
  }
}
