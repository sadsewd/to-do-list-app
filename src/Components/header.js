import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style.ts';

export default function Header({ searchInput, handleSearchInput }) {
  // let navigate = useNavigate();
  // let location = useLocation();

  // const search = (value, location) => {
  //   if (location.pathname === "/") {
  //     navigate("/", { state: value });
  //   }
  // };

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
                value={searchInput}
                onChange={handleSearchInput}
              />
            </form>
          </li>
        </S.Ul>
      </nav>
    </S.StyledHeader>
  );
}
