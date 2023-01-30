import styled from "styled-components";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const inputStyle = `box-shadow: ${BoxShadow}
border-radius: 0.5rem;
border: solid #cdcdcd 3px;
height: 2.5vw;
width: 30vw;
font-size: 2.3vh;
&::placeholder {
  text-align: center;
}
&:focus {
  box-shadow: ${BoxShadowA};
  outline: none;
  &::placeholder {
    color: white;
  }
}`;

const Input = styled.input`
  ${inputStyle};
`;

const TextArea = styled.textarea`
  ${inputStyle};
  resize: vertical;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  border: solid gray 4px;
  width: 50vw;
  margin: 5vh auto;
  border-radius: 1rem;
  padding: 15vh;
`;

const Heading = styled.h1`
  margin-top: 5vh;
  text-align: center;
`;

export default function Create() {
  return (
    <div>
      <Heading>Create a new task</Heading>
      <Div>
        <Form>
          <Label>Task name:</Label>
          <Input type="text" />
          <Label>Description:</Label>
          <TextArea id="description" cols="30" rows="10" />
          <Label>Date created:</Label>
          <Input type="text" value={today} readOnly />
        </Form>
      </Div>
    </div>
  );
}
