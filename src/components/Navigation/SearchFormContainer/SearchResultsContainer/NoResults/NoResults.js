import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

const StyledMessage = styled.p`
  font-size: 3rem;
  color: var(--grey-dark3);
`;

const NoResults = () => {
  return (
    <StyledContainer>
      <StyledMessage>
        No results found.
        <br />
        Try another search.
      </StyledMessage>
    </StyledContainer>
  );
};

export default NoResults;
