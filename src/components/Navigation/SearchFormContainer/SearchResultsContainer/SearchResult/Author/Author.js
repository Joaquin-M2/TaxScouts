import styled from 'styled-components';

const StyledAuthor = styled.address`
  grid-area: 5 / 2 / 6 / 4;
  font-size: 1.2rem;
  color: black;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const Author = props => {
  return (
    <StyledAuthor>
      Author:{' '}
      <a
        href={`https://www.google.com/search?q=${props.children.replace(
          / /g,
          '+'
        )}`}
        rel="author noopener noreferrer nofollow"
        target="_blank"
      >
        {props.children}
      </a>
    </StyledAuthor>
  );
};

export default Author;
