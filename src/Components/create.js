import styled from "styled-components";

const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

const Form = styled.form`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input`
box-shadow: ${BoxShadow}
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
  }
  &::description{
    height: 20vw;
  }
`;

export default function Create() {
  return (
    <div>
      <Form>
        <Label>Task name:</Label>
        <Input type="text" />
        <Label id="description">Description:</Label>
        <Input type="text" />
        <Label>Date created:</Label>
        <Input type="text" />
      </Form>
    </div>
  );
}
