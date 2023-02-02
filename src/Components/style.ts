import { Link } from "react-router-dom";
import styled from "styled-components";
const TextBorder =
  "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: black;";
const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

export const StyledHeader = styled.header`
    background-image: linear-gradient(to bottom ,rgb(252, 92, 3), rgb(254, 148, 2));
  display: flex;
  justify-content: space-around;
  padding 1.5vh;
  border-bottom: solid #ececec 4px
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  gap: 10vw;
`;

export const Button = styled(Link)`
  border: none;
  text-decoration: none;
  background: rgb(3, 163, 252);
  box-shadow: ${BoxShadow};
  padding: 0.8vw 8vw;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 1.5vw;
  &:hover {
    cursor: pointer;
    ${TextBorder}
    color: rgb(254, 148, 2);
    box-shadow: ${BoxShadowA};
  }
  &:active{
    transition: ease-out 0s;
    background: rgb(115, 205, 255);
  }
  &.cancel {
    background: red;
    width: 14vw;
    padding 0;
  }
  &.add {
    background: green;
    width: 14vw;
    padding 0;
  }`;

export const StyledSearchBar = styled.input`
  box-shadow: ${BoxShadow}
  border-radius: 6px;
  border: none;
  background: rgb(3, 163, 252);
  padding: 0.8vw;
  height: 3.3vw;
  width: 20vw;
  font-size: 1.5vw;
  &::placeholder {
    text-align: center;
    color: white;
    font-weight:bold;
    transition: ease-out .3s;
  }
  &:focus {
    background: white;
    border: solid #cdcdcd 3px;
    box-shadow: ${BoxShadowA};
    outline: none;
    &::placeholder {
      visibility: hidden;
    }
  }
  &:hover{
    box-shadow: ${BoxShadowA};
    &::placeholder{
      ${TextBorder};
      color: rgb(254, 148, 2);
      transition: ease-in .3s;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.5rem;
`;

export const inputStyle = `box-shadow: ${BoxShadow}
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

export const Input = styled.input`
  ${inputStyle};
`;

export const TextArea = styled.textarea`
  ${inputStyle};
  resize: vertical;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  border: solid gray 4px;
  width: 50vw;
  margin: 5vh auto;
  border-radius: 1rem;
  padding: 15vh;
`;

export const Heading = styled.h1`
  margin-top: 5vh;
  text-align: center;
`;

export const FormDiv = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
`;

export const optionButton = styled.button`
  height: 5vh;
  width: 12.5vw;
  border-radius: 1rem;
  border: none;
  font-weight: bold;
  font-size: 1.5vw;
  color: white;
  box-shadow: ${BoxShadow};
  &:hover {
    box-shadow: ${BoxShadowA};
    cursor: pointer;
    color: rgb(254, 148, 2);
    ${TextBorder};
  }
  &.cancel {
    background: red;
  }
  &.add {
    background: green;
  }
  &.delete {
    border-radius: 0;
    background: red;
    color: yellow;
    box-shadow: none;
    border-radius: 0 0 0 1rem;
  }
  &.edit {
    border-radius: 0;
    background: yellow;
    color: red;
    box-shadow: none;
    border-radius: 0 0 1rem 0;
  }
  &.delete:hover {
    box-shadow: none;
  }
  &.edit:hover {
    box-shadow: none;
  }
`;

export const Container = styled.div`
  margin: 2vh 2vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TaskName = styled.h1`
  color: black;
  font-size: 3vh;
  font-weight: bold;
  text-align: center;
  margin-left: 1vw;
  padding-bottom: 10rem;
  inline-size: 22.5vw;
  position: absolute;
  top: 0;
`;

export const TaskContainer = styled.div`
  background: rgb(255, 138, 92);
  border-radius: 1rem 1rem 0 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4vh 2vw 0;
  min-height: 50vh;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: auto;
  overflow-wrap: break-word;
  inline-size: 24.5vw;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TaskDate = styled.p`
  width: 24.5vw;
  bottom: 0;
  font-size: 2vh;
  font-weight: bold;
`;

export const TaskDescription = styled.p`
  margin-left: 1vw;
  font-size: auto;
  inline-size: 22.5vw;
  text-align: center;
  margin-bottom: 3vw;
  position: absolute;
  top: 10vh;
  overflow: auto;
  bottom: 0vh;
`;

export const TaskOptions = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  margin: 0 4vh 2vh;
  width: 24.5vw;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
`;

export const DateContainer = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  position: absolute;
  text-align: center;
`;

export const TNameContainer = styled.div``;
