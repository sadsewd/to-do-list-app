import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGetAllTasks from '../hooks/useGetAllTasks';
import * as S from './style.ts';

//function for getting current day for task date of creation
function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

// A function to handle the setting data to the local Storage
export const setDataToLocalStorage = (data) => {
  localStorage.setItem('allTasks', JSON.stringify(data));
};

function Create() {
  // *****************************************START OF REFACTOR*************************************
  // 1. Create a useState with initial values for the form data as an object and set the initial values
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: '',
    description: '',
    dateCreated: getCurrentDate(),
  });

  // the router dom functions
  const navigation = useNavigate();
  const { id } = useParams(); //<-- her ewe get the id which is passed to the route create/:id

  // on each component load we use the custom hook useGetAllTasks to get all tasks this fiers on every component load
  const { allTasks } = useGetAllTasks();

  /* 2. Function to handle form data. One function to handle each input field
  info here: https://beta.reactjs.org/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
  and here: https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // This is a function to save a new task to local storage
  const saveNewTask = () => {
    if (allTasks) {
      const dataToSave = [...allTasks, formData];
      setDataToLocalStorage(dataToSave);
    } else {
      setDataToLocalStorage([formData]);
    }
  };

  // this is a function to handle a task edit
  const editExistingTask = () => {
    const updatedTasks = allTasks.map((task) =>
      task.id === id ? formData : task
    );
    setDataToLocalStorage(updatedTasks);
  };

  // 3. Function to handle submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editExistingTask();
    } else {
      saveNewTask();
    }
    navigation('/');
  };

  // This is a useEffect for setting the initial form values to the values of an existing task from the task arrays when the parameter id is passed
  useEffect(() => {
    if (id && allTasks) {
      const taskToEdit = allTasks.find((task) => task.id === id);
      if (taskToEdit) {
        setFormData(taskToEdit);
      }
    }
  }, [allTasks, id]);
  // ************************************************END OF REFACTOR*************************************

  // const editValues = useLocation();
  // let edit;
  // let editedName;
  // let editedDesc;

  // if (editValues.state !== null) {
  //   edit = true;
  // }
  // //each task is an object which contains the necessary data for the task
  // let taskTemp = {};
  // let nameTemp = {};
  // let descriptionTemp = {};
  // let navigation = useNavigate();

  // const handleSubmit = (event) => {
  //   let newTaskId = localStorage.length + 1;

  //   if (!editedName && edit) {
  //     nameTemp = { taskName: editValues.state.taskName };
  //   }
  //   if (!editedDesc && edit) {
  //     descriptionTemp = { description: editValues.state.description };
  //   }

  //   taskTemp = {
  //     ...nameTemp,
  //     ...descriptionTemp,
  //     date: editValues.state?.date || getCurrentDate(),
  //     id: editValues.state?.id || newTaskId,
  //   };
  //   localStorage.setItem(
  //     JSON.stringify(editValues.state?.id || newTaskId),
  //     JSON.stringify(taskTemp)
  //   );
  //   edit = false;
  //   navigation('/');
  // };

  // function setName(value) {
  //   nameTemp = { taskName: value };
  //   editedName = true;
  // }

  // function setDescription(value) {
  //   descriptionTemp = { description: value };
  //   editedDesc = true;
  // }

  return (
    <div>
      <S.Heading>Create a new task</S.Heading>
      <S.Div>
        <S.Form onSubmit={handleFormSubmit}>
          <S.Label>Task name:</S.Label>
          <S.Input
            type="text"
            id="taskName"
            name="name"
            value={formData.name}
            //data gets stored when changes occur
            onChange={handleInputChange}
          />
          <S.Label>Description:</S.Label>
          <S.TextArea
            id="description"
            name="description"
            value={formData.description}
            //data gets stored when changes occur
            onChange={handleInputChange}
          />
          <S.Label>Date created:</S.Label>
          <S.Input
            type="date"
            id="dateCreated"
            name="dateCreated"
            value={formData.dateCreated}
            readOnly
          />
          <S.FormDiv>
            <S.optionButton
              onClick={() => {
                navigation('/');
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

export default Create;
