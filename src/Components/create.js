//import useLocalStorage from "../useLocalStorage";
import * as S from "./style.ts";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

export default function Create() {
  return (
    <div>
      <S.Heading>Create a new task</S.Heading>
      <S.Div>
        <S.Form>
          <S.Label>Task name:</S.Label>
          <S.Input type="text" />
          <S.Label>Description:</S.Label>
          <S.TextArea id="description" cols="30" rows="10" />
          <S.Label>Date created:</S.Label>
          <S.Input type="text" value={today} readOnly />
          <S.FormDiv>
            <S.Button className="cancel">Cancel</S.Button>
            <S.Button className="add">Add</S.Button>
          </S.FormDiv>
        </S.Form>
      </S.Div>
    </div>
  );
}
