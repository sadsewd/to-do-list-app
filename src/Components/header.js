import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style.ts";

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();

  const search = (value, location) => {
    if (location.pathname === "/") {
      navigate("/", { state: value });
    }
  };

  return (
    <S.StyledHeader>
      <nav>
        <S.Ul>
          <li>
            <S.Button to="/">Home</S.Button>
          </li>
          <li>
            <S.Button to="/create">Create</S.Button>
          </li>
          <li>
            <form>
              <S.StyledSearchBar
                type="text"
                id="Search"
                placeholder="Search"
                onChange={(e) => search(e.target.value, location)}
              />
            </form>
          </li>
        </S.Ul>
      </nav>
    </S.StyledHeader>
  );
}
