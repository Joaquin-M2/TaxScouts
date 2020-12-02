import styled from 'styled-components';

const StyledSearchFormContainer = styled.div`
  position: relative;
  margin-left: auto;
  padding: 0 1rem;
`;

const SearchFormContainer = props => {
  return (
    <StyledSearchFormContainer>{props.children}</StyledSearchFormContainer>
  );
};

export default SearchFormContainer;
