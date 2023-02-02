import { useNavigate } from "react-router-dom";
import * as S from "./style.ts";

//function for getting current day for task date of creation
function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

export default function Create() {
  //each task is an object which contains the necessary data for the task
  let task = {};
  let name = {};
  let description = {};
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    task = { ...name, ...description, date: getCurrentDate() };
    let newTaskId = localStorage.length + 1;
    localStorage.setItem(JSON.stringify(newTaskId), JSON.stringify(task));
    navigate("/");
  };

  return (
    <div>
      <S.Heading>Create a new task</S.Heading>
      <S.Div>
        <S.Form onSubmit={handleSubmit}>
          <S.Label>Task name:</S.Label>
          <S.Input
            type="text"
            id="taskName"
            //data gets stored when changes occur
            onChange={(e) => (name = { taskName: e.target.value })}
          />
          <S.Label>Description:</S.Label>
          <S.TextArea
            id="description"
            //data gets stored when changes occur
            onChange={(e) => (description = { description: e.target.value })}
          />
          <S.Label>Date created:</S.Label>
          <S.Input
            type="date"
            id="dateCreated"
            value={getCurrentDate()}
            readOnly
          />
          <S.FormDiv>
            <S.Button to="/" className="cancel">
              Cancel
            </S.Button>
            <button className="add" type="submit">
              Add
            </button>
          </S.FormDiv>
        </S.Form>
      </S.Div>
    </div>
  );
}
