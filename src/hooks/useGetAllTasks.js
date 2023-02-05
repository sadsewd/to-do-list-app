import { useEffect, useState } from 'react';

const useGetAllTasks = () => {
  const [allTasks, setAllTasks] = useState();

  const getDataFromLocalStorage = () => {
    const allTasks = JSON.parse(localStorage.getItem('allTasks'));
    if (allTasks) {
      return allTasks;
    } else {
      return [];
    }
  };

  const getTasks = () => {
    setAllTasks(getDataFromLocalStorage());
  };

  useEffect(() => {
    setAllTasks(getDataFromLocalStorage());
  }, []);

  return { allTasks, getTasks };
};

export default useGetAllTasks;
