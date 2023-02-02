import * as S from "./style.ts";

export default function Header() {
  return (
    <S.StyledHeader>
      <S.Ul>
        <li>
          <S.Button to="/">Home</S.Button>
        </li>
        <li>
          <S.Button to="/create">Create</S.Button>
        </li>
        <li>
          <form>
            <S.StyledSearchBar type="text" id="Search" placeholder="Search" />
            <input type="submit" hidden />
          </form>
        </li>
      </S.Ul>
    </S.StyledHeader>
  );
}
