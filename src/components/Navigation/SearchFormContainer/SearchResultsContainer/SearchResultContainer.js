import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import sendHttpRequest from '../../../../utils/sendHttpRequest-XML';
import decodeHTMLEntities from '../../../../utils/decodeHTMLEntities';

import SearchResult from './SearchResult/SearchResult';
import Spinner from './Spinner/Spinner';
import NoResults from './NoResults/NoResults';

const StyledSearchResultsContainer = styled.div`
  display: ${props => (props.userInput === '' ? 'none' : 'block')};
  background-color: var(--grey-dark);
  margin-top: 1.2rem;
  width: 50rem;
  max-height: 30rem;

  position: absolute;
  right: 1rem;

  overflow: auto;

  border: 1px solid var(--grey-dark2);
  border-radius: 0 0.55rem 0.55rem 0;

  &::-webkit-scrollbar {
    width: 2.4rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0 0.55rem 0.55rem 0;
    background-color: var(--grey-dark3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0 2.4rem 2.4rem 0;
    border: 0.4rem solid var(--grey-dark3);
    width: 0.4rem;
    background-color: var(--grey-dark);
  }
`;

const SearchResultsContainer = props => {
  const [results, setResults] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    let foundResults = [];
    function fetchBooks() {
      if (!props.userInput || spinner) return;
      setSpinner(true);
      sendHttpRequest(
        'GET',
        `https://reststop.randomhouse.com/resources/titles?search=${encodeURI(
          props.userInput
        )}`
      )
        .then(response => {
          if (response.children[0].children.length > 0) {
            let currIteration = 0;
            for (const foundResult of response.children[0].children) {
              currIteration++;
              const titleText = foundResult.querySelector('titleweb')
                .textContent;
              const authorText = foundResult.querySelector('authorweb')
                .textContent;
              const flapElement = foundResult.querySelector('flapcopy');
              const flapDecoded = decodeHTMLEntities(
                flapElement
                  ? flapElement.textContent
                  : 'Description not available.'
              );
              foundResults.push(
                <SearchResult
                  img={foundResult.attributes[0].nodeValue}
                  title={
                    titleText.length < 30
                      ? titleText
                      : titleText.substring(0, 30).trim() + '...'
                  }
                  flap={
                    flapDecoded.length >= 220
                      ? flapDecoded
                          .replace(/(<\/?(\s|\S)*?>)/g, ' ')
                          .substring(0, 220)
                          .trim() + '...'
                      : flapDecoded.replace(/(<\/?(\s|\S)*?>)/g, ' ').trim()
                  }
                  author={authorText}
                  key={currIteration}
                />
              );
            }
            return foundResults;
          } else {
            foundResults = <NoResults />;
            return foundResults;
          }
        })
        .then(results => {
          setResults(results);
          setSpinner(false);
        });
    }

    fetchBooks();
  }, [props.userInput]);

  return (
    <StyledSearchResultsContainer userInput={props.userInput}>
      {spinner ? <Spinner /> : results}
    </StyledSearchResultsContainer>
  );
};

const mapStateToProps = state => {
  return {
    userInput: state.searchReduc.userInput,
  };
};

export default connect(mapStateToProps, null)(SearchResultsContainer);
