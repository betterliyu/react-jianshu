import React from 'react';
import {
  IconFont,
  ResetStyle
} from './style';
import {
  HeaderContainer
} from './containers';


const App = props => {
  return (
    <div className="app-container">
      <ResetStyle />
      <IconFont />
      <HeaderContainer />
    </div>
  );
}

export default App;