import styled from 'styled-components';

import Picture from './Picture/Picture';
import Title from './Title/Title';
import FlapText from './FlapText/FlapText';
import Author from './Author/Author';
import Links from './Links/Links';

const StyledSearchResult = styled.div`
  display: grid;
  grid-template: 1fr, 3fr, 1fr / 1fr, 2fr, 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  height: 20rem;

  background-color: var(--grey-dark);

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--grey-dark2);
  }
`;

const SearchResult = props => {
  return (
    <StyledSearchResult>
      <Picture img={props.img} />
      <Title>{props.title}</Title>
      <FlapText>{props.flap}</FlapText>
      <Author>{props.author}</Author>
      <Links
        linkToGoogle={`https://www.google.com/search?q=${props.title.replace(
          / /g,
          '+'
        )}+${props.author.replace(/ /g, '+')}`}
        linkToAmazon={`https://www.amazon.com/s?k=${props.title.replace(
          / /g,
          '+'
        )}+${props.author.replace(/ /g, '+')}`}
      />
    </StyledSearchResult>
  );
};

export default SearchResult;
