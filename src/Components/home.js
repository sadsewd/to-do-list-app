import { useEffect, useState } from 'react';
import useGetAllTasks from '../hooks/useGetAllTasks';
import TaskList from './taskList';
import * as S from './style.ts';
import { setDataToLocalStorage } from './create';

function Home({ searchInput }) {
  // *****************************************START OF REFACTOR*******************************************
  //  Start with getting all tasks from the custom hook like in create.js
  const { allTasks, getTasks } = useGetAllTasks();
  // This is a useState to hold filtered tasks if something is typed in search
  const [filteredTasks, setFilteredTasks] = useState([]);

  // tis is a function to handle a deletion of a task
  const handleTaskDelete = (id) => {
    const updatedTaskList = allTasks.filter((task) => task.id !== id);
    setDataToLocalStorage(updatedTaskList);
    getTasks(); //<-- this is a function from useGetAllTasks to manually update the returned state so that the component updates
  };

  // here we have an usEffect that fires when searchInput changes
  useEffect(() => {
    if (searchInput) {
      const filteredTasks = allTasks.filter((task) => {
        if (
          task.name.includes(searchInput) ||
          task.description.includes(searchInput)
        ) {
          return task;
        }
      });
      setFilteredTasks(filteredTasks);
    }
  }, [searchInput]);

  // ************************************************END OF REFACTOR*************************************

  // let taskObjArray = [];
  // let taskObj;
  // const navigate = useNavigate();
  // let location = useLocation();

  // for (let i = 0; i < localStorage.length; i++) {
  //   taskObj = JSON.parse(localStorage.getItem(i + 1));
  //   taskObjArray[i] = taskObj;
  // }
  // const [task, setTask] = useState(taskObjArray);

  // const filtered = task.filter((task) => {
  //   return (
  //     task.taskName === location.state ||
  //     task.description === location.state ||
  //     task.date === location.state
  //   );
  // });

  // function deleteTaskLocalStorage(itemId) {
  //   //specified item gets removed from local storage
  //   localStorage.removeItem(itemId);
  //   //specified item gets removed from array of object used for rendering the task
  //   const newArr = task.filter((object) => {
  //     return object.id !== itemId;
  //   });
  //   setTask(newArr);
  // }

  // function toEdit(id, taskName, description, date) {
  //   navigate('/create', {
  //     state: {
  //       id: id,
  //       taskName: taskName,
  //       description: description,
  //       date: date,
  //     },
  //   });
  // }

  // here i split the large html structure in to TaskList and TaskItem
  return (
    <TaskList
      taskList={searchInput.length === 0 ? allTasks : filteredTasks}
      handleTaskDelete={handleTaskDelete}
    />
  );
}

export default Home;
