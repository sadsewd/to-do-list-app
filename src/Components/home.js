import * as S from "./style.ts";

export default function Home() {
  let taskObjArray = [];
  let taskObj;

  for (let i = 0; i < localStorage.length; i++) {
    taskObj = JSON.parse(localStorage.getItem(i + 1));
    taskObjArray[i] = taskObj;
  }
  return (
    <S.Container>
      {taskObjArray.map((task) => {
        return (
          <S.TaskContainer>
            <S.TaskName>{task.taskName}</S.TaskName>
            <S.TaskDescription>{task.description}</S.TaskDescription>
            <S.TaskDate>Date created: {task.date}</S.TaskDate>
          </S.TaskContainer>
        );
      })}
    </S.Container>
  );
}
