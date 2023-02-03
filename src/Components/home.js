import { useState } from "react";
import * as S from "./style.ts";

export default function Home() {
  let taskObjArray = [];
  let taskObj;

  for (let i = 0; i < localStorage.length; i++) {
    taskObj = JSON.parse(localStorage.getItem(i + 1));
    taskObjArray[i] = taskObj;
  }

  const [task, setTask] = useState(taskObjArray);

  function deleteTaskLocalStorage(itemId) {
    //specified item gets removed from local storage
    localStorage.removeItem(itemId);
    //specified item gets removed from array of object used for rendering the task
    const newArr = task.filter((object) => {
      return object.id !== itemId;
    });
    setTask(newArr);
  }

  return (
    <S.Container>
      {task.map((task, id) => {
        return (
          <div key={id}>
            <S.TaskContainer>
              <S.TNameContainer>
                <S.TaskName>{task?.taskName || ""}</S.TaskName>
              </S.TNameContainer>
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
              <S.optionButton className="edit">Edit</S.optionButton>
            </S.TaskOptions>
          </div>
        );
      })}
    </S.Container>
  );
}
