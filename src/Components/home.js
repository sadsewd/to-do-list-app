export default function Home() {
  let taskNameValue = [];
  let descriptionValue = [];
  let dateValue = [];
  let htmlCode = "";

  let taskObj;
  for (let i = 0; i < localStorage.length; i++) {
    taskObj = JSON.parse(localStorage.getItem(i + 1));
    taskNameValue[i] = taskObj.taskName;
    descriptionValue[i] = taskObj.description;
    dateValue[i] = taskObj.date;
    htmlCode += `<div><h1>${taskNameValue[i]}</h1></br><p>${descriptionValue[i]}</p></br><p>${dateValue[i]}</p></div>`;
  }

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
}
