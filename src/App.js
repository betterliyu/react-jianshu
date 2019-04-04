import React from 'react';
import {
  IconFont,
  ResetStyle
} from './styles';
import {
  HeaderContainer
} from './containers';


const App = props => {
  return (
    <React.Fragment>
      <ResetStyle />
      <IconFont />
      <HeaderContainer />
    </React.Fragment>
  );
}

export default App;