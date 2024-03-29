import styled, { keyframes } from 'styled-components';

const animationChase = keyframes`
100% { transform: rotate(360deg); } 
`;

const animationChaseDot = keyframes`
80%, 100% { transform: rotate(360deg); } 
`;

const animationChaseDotBefore = keyframes`
50% {
  transform: scale(0.4); 
} 100%, 0% {
  transform: scale(1.0); 
} 
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinnerShape = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  animation: ${animationChase} 2.5s infinite linear both;
`;

const StyledSpinnerDot = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation: ${animationChaseDot} 2s infinite ease-in-out both;

  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: var(--grey-dark3);
    border-radius: 100%;
    animation: ${animationChaseDotBefore} 2s infinite ease-in-out both;
  }
  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }
  &:nth-child(1)::before {
    animation-delay: -1.1s;
  }
  &:nth-child(2)::before {
    animation-delay: -1s;
  }
  &:nth-child(3)::before {
    animation-delay: -0.9s;
  }
  &:nth-child(4)::before {
    animation-delay: -0.8s;
  }
  &:nth-child(5)::before {
    animation-delay: -0.7s;
  }
  &:nth-child(6)::before {
    animation-delay: -0.6s;
  }
`;

const Spinner = () => {
  return (
    <StyledContainer>
      <StyledSpinnerShape>
        <StyledSpinnerDot />
        <StyledSpinnerDot />
        <StyledSpinnerDot />
        <StyledSpinnerDot />
        <StyledSpinnerDot />
        <StyledSpinnerDot />
      </StyledSpinnerShape>
    </StyledContainer>
  );
};

export default Spinner;
