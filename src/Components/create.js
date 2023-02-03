import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const editValues = useLocation();
  console.log(editValues.state);
  let edit;
  let editedName;
  let editedDesc;

  if (editValues.state !== null) {
    edit = true;
  }
  //each task is an object which contains the necessary data for the task
  let taskTemp = {};
  let nameTemp = {};
  let descriptionTemp = {};
  let navigation = useNavigate();

  const handleSubmit = (event) => {
    let newTaskId = localStorage.length + 1;

    if (!editedName && edit) {
      nameTemp = { taskName: editValues.state.taskName };
    }
    if (!editedDesc && edit) {
      descriptionTemp = { description: editValues.state.description };
    }

    taskTemp = {
      ...nameTemp,
      ...descriptionTemp,
      date: editValues.state?.date || getCurrentDate(),
      id: editValues.state?.id || newTaskId,
    };
    localStorage.setItem(
      JSON.stringify(editValues.state?.id || newTaskId),
      JSON.stringify(taskTemp)
    );
    edit = false;
    navigation("/");
  };

  function setName(value) {
    nameTemp = { taskName: value };
    editedName = true;
  }

  function setDescription(value) {
    descriptionTemp = { description: value };
    editedDesc = true;
  }

  return (
    <div>
      <S.Heading>Create a new task</S.Heading>
      <S.Div>
        <S.Form onSubmit={handleSubmit}>
          <S.Label>Task name:</S.Label>
          <S.Input
            type="text"
            id="taskName"
            defaultValue={editValues.state?.taskName || ""}
            //data gets stored when changes occur
            onChange={(e) => setName(e.target.value)}
          />
          <S.Label>Description:</S.Label>
          <S.TextArea
            id="description"
            defaultValue={editValues.state?.description || ""}
            //data gets stored when changes occur
            onChange={(e) => setDescription(e.target.value)}
          />
          <S.Label>Date created:</S.Label>
          <S.Input
            type="date"
            id="dateCreated"
            value={editValues.state?.date || getCurrentDate()}
            readOnly
          />
          <S.FormDiv>
            <S.optionButton
              onClick={() => {
                navigation("/");
              }}
              className="cancel"
            >
              Cancel
            </S.optionButton>
            <S.optionButton className="add" type="submit">
              Add
            </S.optionButton>
          </S.FormDiv>
        </S.Form>
      </S.Div>
    </div>
  );
}
