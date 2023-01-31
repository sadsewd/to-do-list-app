import styled from "styled-components";
import { Link } from "react-router-dom";

const TextBorder =
  "-webkit-text-stroke-width: 0.5px; -webkit-text-stroke-color: black;";
const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

export const StyledHeader = styled.header`
    background-image: linear-gradient(to bottom ,rgb(252, 92, 3), rgb(254, 148, 2));
  display: flex;
  justify-content: center;
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

export const Button = styled.button`
  border: none;
  text-decoration: none;
  background: rgb(3, 163, 252);
  box-shadow: ${BoxShadow};
  padding: 0.8vw 8vw;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  font-size: 1.5vw;
  &:hover {
    cursor: pointer;
    ${TextBorder}
    color: rgb(254, 148, 2);
    box-shadow: ${BoxShadowA};
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
      color: white;
    }
  }
  &:hover{
    box-shadow: ${BoxShadowA};
    &::placeholder {
      ${TextBorder};
      color: rgb(254, 148, 2);
      transition: ease-out .3s;
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
