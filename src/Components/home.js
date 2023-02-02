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
          <div>
            <S.TaskContainer>
              <S.TNameContainer>
                <S.TaskName>{task.taskName}</S.TaskName>
              </S.TNameContainer>
              <S.TaskDescription>{task.description}</S.TaskDescription>
              <S.DateContainer>
                <S.TaskDate>Date of creation : {task.date}</S.TaskDate>
              </S.DateContainer>
            </S.TaskContainer>
            <S.TaskOptions>
              <S.optionButton className="delete">Delete</S.optionButton>
              <S.optionButton className="edit">Edit</S.optionButton>
            </S.TaskOptions>
          </div>
        );
      })}
    </S.Container>
  );
}
