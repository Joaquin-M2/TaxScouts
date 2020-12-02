import styled from 'styled-components';

const StyledSearchResult = styled.p`
  grid-area: 2 / 2 / 5 / 4;
  font-size: 1.3rem;
  color: black;
  text-align: justify;
`;

const SearchResult = props => {
  return <StyledSearchResult>{props.children}</StyledSearchResult>;
};

export default SearchResult;
