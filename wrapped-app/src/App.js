import React from 'react';
import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Button from './button';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: purple;
  color: white;
  .site-overwrite {
    color: burlywood; // This is not gonna apply outside the component, so the site is safe with this.
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="light-font">
          Hi! I am a React app!! I have to watch out to have the #root element to
          attach to already loaded in the site's DOM
        </div>
        <Button />
        <ul>
          <li>
            <div className="light-font">
              The styles can get bundled within the JS
            </div>
          </li>
          <li>
            <div className="light-font">.svg as component gets bundled</div>
            <Logo className="App-logo" />
          </li>
          <li>
            <div className="light-font">
              img with src='...' is out of bundle so it has to be requested
            </div>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <div className="light-font">
              CSS properties not set in app can get written by site. Example:
            </div>
            Font-weight: bolder; is set from site.
          </li>
        </ul>
        <StyledDiv className="app-overwriteparent">
          <div> {'(💅 styled-component)'}</div>
          yellow font + black background = overwritten
          <div className="app-overwritechild">
            <div> {'(regular div inside styled-component) '}</div>
            red font + green background = overwritten
          </div>
        </StyledDiv>
      </header>
    </div>
  );
}

export default App;
