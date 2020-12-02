import './App.css';

import NavBar from './components/Navigation/NavigationBar';
import SearchFormContainer from './components/Navigation/SearchFormContainer/SearchFormContainer';
import SearchForm from './components/Navigation/SearchFormContainer/SearchForm/SearchForm';
import SearchResultContainer from './components/Navigation/SearchFormContainer/SearchResultsContainer/SearchResultContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
        <SearchFormContainer>
          <SearchForm />
          <SearchResultContainer />
        </SearchFormContainer>
      </NavBar>
    </div>
  );
}

export default App;
