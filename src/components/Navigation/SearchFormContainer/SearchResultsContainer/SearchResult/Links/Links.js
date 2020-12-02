import styled from 'styled-components';

import GoogleLogo from '../../../../../../assets/images/google-logo.png';
import AmazonLogo from '../../../../../../assets/images/amazon-logo.png';

const StyledContainer = styled.div`
  grid-area: 2 / 4 / 6 / 5;
  background-color: var(--grey-dark2);
  padding: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  & a {
    background-color: white;
    border-radius: 0.5rem;
    font-size: 0px;
    margin: 0.5rem auto;
    max-width: 90%;
    padding: 0.7rem 0;
    text-align: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--grey-dark3);
    }
  }
`;

const StyledImage = styled.img`
  max-width: 70%;
`;

const StyledTitle = styled.p`
  color: var(--grey-light);
  font-size: 1.7rem;
  font-style: italic;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const SearchResultLinks = props => {
  return (
    <StyledContainer>
      <StyledTitle>Find it on:</StyledTitle>
      <a
        href={props.linkToGoogle}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <StyledImage alt="Google logo taking to its page" src={GoogleLogo} />
      </a>
      <a
        href={props.linkToAmazon}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <StyledImage alt="Amazon logo taking to its page" src={AmazonLogo} />
      </a>
    </StyledContainer>
  );
};

export default SearchResultLinks;
