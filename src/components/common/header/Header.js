import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import SearchTrend from './SearchTrend';
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

const propTypes = {
  trend: PropTypes.instanceOf(Immutable.List),
  trendPageNo: PropTypes.number,
  trendTotalPage: PropTypes.number,
  fetchTrendIfNeeded: PropTypes.func.isRequired,
  switchTrendPage: PropTypes.func.isRequired
};

class Header extends Component {
  constructor(props) {
    super(props);

    this.onSearchBoxFocus = this.onSearchBoxFocus.bind(this);
  }

  onSearchBoxFocus() {
    const { fetchTrendIfNeeded } = this.props;
    fetchTrendIfNeeded();
  }

  render() {
    const {
      trend, trendPageNo, trendTotalPage, switchTrendPage,
    } = this.props;
    return (
      <HeaderWrapper>
        <div className="width-limit">
          <Logo href="/" />
          <Nav>
            <NavItem className="nav-item active">
              <i className="iconfont ic-navigation-discover"></i>
              <span>首页</span>
            </NavItem>
            <NavItem className="nav-item">
              <i className="iconfont ic-navigation-download"></i>
              <span>下载App</span>
            </NavItem>
            <NavSearch>
              <input placeholder="搜索" onFocus={this.onSearchBoxFocus} />
              <button className="search-btn">
                <i className="iconfont ic-search"></i>
              </button>
              <SearchTrend
                trend={trend}
                pageNo={trendPageNo}
                totalPage={trendTotalPage}
                switchPage={switchTrendPage}
              />
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

Header.propTypes = propTypes;
export default Header;