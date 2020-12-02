import styled from 'styled-components';

const StyledContainer = styled.div`
  grid-area: 1 / 1 / 6 / 2;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
`;

const StyledPicture = styled.img`
  max-width: 100%;
`;

const Picture = props => {
  return (
    <StyledContainer>
      <StyledPicture src={props.img}>{props.children}</StyledPicture>
    </StyledContainer>
  );
};

export default Picture;
