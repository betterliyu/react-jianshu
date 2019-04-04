import React from 'react';
import PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import { TREND_PAGE_SIZE } from '../../../constants/HeaderConstants';
import { SearchTrendWrapper, } from './style';

const propTypes = {
  trend: PropTypes.instanceOf(Immutable.List),
  pageNo: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  switchPage: PropTypes.func.isRequired
};

class SearchTrend extends React.Component {
  constructor(props) {
    super(props);
    this.onSwitchClick = this.onSwitchClick.bind(this);
    this.switchIcon = null;
    this.currentDeg = 0;
  }

  render() {
    const { trend, pageNo } = this.props;
    const pageList = trend.slice(
      (pageNo - 1) * TREND_PAGE_SIZE,
      (pageNo - 1) * TREND_PAGE_SIZE + TREND_PAGE_SIZE
    );
    return (
      <SearchTrendWrapper className="search-trend">
        <div className="header">
          <span className="title">热门搜索</span>
          <a className="switch"
            onClick={this.onSwitchClick}>
            <i className="iconfont ic-search-change"
              ref={e => this.switchIcon = e}></i>
            换一批
        </a>
        </div>
        <ul className="list">
          {pageList.map(t => <li key={t}><a>{t}</a></li>)}
        </ul>
      </SearchTrendWrapper>
    );
  }

  onSwitchClick() {
    this.props.switchPage();
    this.currentDeg += 360;
    this.switchIcon.style.transform = `rotate(${this.currentDeg}deg)`;
  }
}

SearchTrend.propTypes = propTypes;
export default SearchTrend;