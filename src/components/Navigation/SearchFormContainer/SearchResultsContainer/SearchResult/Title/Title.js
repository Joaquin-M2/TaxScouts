import styled from 'styled-components';

const StyledSearchResultTitle = styled.h4`
  grid-area: 1 / 2 / 2 / 5;
  font-size: 2rem;
  color: black;
  font-weight: bold;
`;

const SearchResultTitle = props => {
  return <StyledSearchResultTitle>{props.children}</StyledSearchResultTitle>;
};

export default SearchResultTitle;
