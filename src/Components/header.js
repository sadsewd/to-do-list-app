import * as S from "./style.ts";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.StyledHeader>
      <S.Ul>
        <li>
          <Link to="/">
            <S.Button>Home</S.Button>
          </Link>
        </li>
        <li>
          <Link to="/create">
            <S.Button>Create</S.Button>
          </Link>
        </li>
        <li>
          <form>
            <S.StyledSearchBar type="text" id="Search" placeholder="Search" />
            <input type="submit" hidden />
          </form>
        </li>
      </S.Ul>
      <script
        src="https://kit.fontawesome.com/ee790463db.js"
        crossOrigin="anonymous"
      ></script>
    </S.StyledHeader>
  );
}
