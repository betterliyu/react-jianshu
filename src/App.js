import React from 'react';
import { GlobalStyle } from './style';
import Header from './component/common/header';


const App = (props) => {
  return (
    <div className="app-container">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;