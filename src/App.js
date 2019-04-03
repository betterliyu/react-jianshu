import React from 'react';
import { ResetStyle } from './style';
import { IconFont } from './statics/iconfont/iconfont';
import Header from './component/common/header';


const App = (props) => {
  return (
    <div className="app-container">
      <ResetStyle />
      <IconFont />
      <Header />
    </div>
  );
}

export default App;