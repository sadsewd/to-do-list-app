import styled from "styled-components";

const BoxShadow =
  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
const BoxShadowA =
  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);";

const StyledHeader = styled.header`
  background: rgb(255, 195, 112);
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
  background: rgb(112, 172, 255);
  box-shadow: ${BoxShadow}
  padding: 0.8vw 8vw;
  border-radius: 6px;
  color: Black;
  font-weight: bold;
  font-size: 2.3vh;
  &:hover {
    color: white;
    box-shadow: ${BoxShadowA};
  }
`;

const Input = styled.input`
box-shadow: ${BoxShadow}
  border-radius: 0.5rem;
  border: solid #cdcdcd 3px;
  height: 2.5vw;
  width: 20vw;
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
