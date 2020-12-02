import { connect } from 'react-redux';
import * as actionCreators from '../../../../store/actions/index';

import styled from 'styled-components';

const StyledSearchForm = styled.form`
  position: relative;

  display: flex;
  justify-content: center;

  &::after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--grey-dark);
    border: 1px solid var(--grey-dark2);
    border-bottom: none;
    
    position: absolute;
    bottom: -2.09rem;
    transform: rotate(43.4deg);
    clip-path: polygon(0% 0%, 100% 0%, 55% 55%, 0% 100%);

    z-index: 2;

    display: ${props => (props.userInput < 1 ? 'none' : 'block')};
`;

const StyledSearchFormInput = styled.input`
  background-color: var(--grey-dark);
  border-radius: 0.5rem;
  border: none;

  width: 100%;
  padding: 1rem 1.5rem;

  &:focus {
    outline: none;
  }
`;

const SearchFormInput = props => {
  let userStoppedWritting;

  return (
    <StyledSearchForm userInput={props.userInput}>
      <StyledSearchFormInput
        type="text"
        placeholder="Quick search..."
        onKeyUp={e => {
          clearTimeout(userStoppedWritting);
          if (e.target.value) {
            userStoppedWritting = setTimeout(
              () => props.onSetUserSearch(e.target.value.trim()),
              500
            );
          } else if (e.target.value === '') {
            props.onSetUserSearch(e.target.value.trim());
          }
        }}
      />
    </StyledSearchForm>
  );
};

const mapStateToProps = state => {
  return {
    userInput: state.searchReduc.userInput,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserSearch: userInput =>
      dispatch(actionCreators.updateUserInput(userInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormInput);
