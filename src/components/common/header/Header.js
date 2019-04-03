import React, { Component } from 'react';
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  StyleMode
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="width-limit">
          <Logo href="/" />
          <Nav>
            <NavItem className="active">
              <i className="iconfont ic-navigation-discover"></i>
              <span>首页</span>
            </NavItem>
            <NavItem>
              <i className="iconfont ic-navigation-download"></i>
              <span>下载App</span>
            </NavItem>
            <NavSearch>
              <input placeholder="搜索" />
              <button className="search-btn">
                <i className="iconfont ic-search"></i>
              </button>
            </NavSearch>
          </Nav>
          <Addition >
            <Button className="writting">
              <i className="iconfont ic-write"></i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
            <Button className="login">登录</Button>
            <StyleMode>
              <i className="iconfont ic-navigation-mode"></i>
            </StyleMode>
          </Addition>

        </div>
      </HeaderWrapper>
    );
  }
}
export default Header;