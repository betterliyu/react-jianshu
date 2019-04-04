import React from 'react';
import PropTypes from 'prop-types';
import * as Immutable from 'immutable';
import {
  SearchTrendWrapper,
} from './style';

const propTypes = {
  trend: PropTypes.instanceOf(Immutable.List),
  pageNo: PropTypes.number,
  totalPage: PropTypes.number,
  switchPage: PropTypes.func.isRequired
};

const SearchTrend = ({
  trend,
  pageNo,
  totalPage,
  switchPage,
}) => {
  return (
    <SearchTrendWrapper>
      <div className="header">
        <span className="title">热门搜索</span>
        <a className="switch">
          <i className="iconfont ic-search-change"></i>
          换一批
        </a>
      </div>
      <ul className="list">
        {trend.map(t => <li key={t}><a>{t}</a></li>)}
      </ul>
    </SearchTrendWrapper>
  );
}

SearchTrend.propTypes = propTypes;
export default SearchTrend;