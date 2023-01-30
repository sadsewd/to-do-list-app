import styled from "styled-components";

const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

const StyledHeader = styled.header`
    background-image: linear-gradient(to bottom ,rgb(252, 92, 3), rgb(254, 148, 2));
  display: flex;
  justify-content: center;
  padding 1.5vh;
  border-bottom: solid #ececec 4px
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  gap: 10vw;
  underline: none;
`;

const A = styled.a`
  text-decoration: none;
  background: rgb(3, 163, 252);
  box-shadow: ${BoxShadow};
  padding: 0.8vw 8vw;
  border-radius: 6px;
  color: Black;
  font-weight: bold;
  font-size: 1.5vw;
  &:hover {
    color: white;
    box-shadow: ${BoxShadowA};
  }
`;

const Input = styled.input`
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
    color: black;
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
      color: white;
      transition: ease-out .3s;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Ul>
        <li>
          <A href="/">Home</A>
        </li>
        <li>
          <A href="/">Create</A>
        </li>
        <li>
          <Input type="text" id="Search" placeholder="Search" />
        </li>
      </Ul>
      <script
        src="https://kit.fontawesome.com/ee790463db.js"
        crossOrigin="anonymous"
      ></script>
    </StyledHeader>
  );
}
