import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header/Header';
import {
  fetchTrendIfNeeded,
  switchTrendPage
} from '../actions/SearchActions';

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => {
  return {
    trend: state.getIn(['header', 'trend']),
    trendPageNo: state.getIn(['header', 'trendPageNo']),
    trendTotalPage: state.getIn(['header', 'trendTotalPage'])
  };
}

const mapDispatchToProps = {
  fetchTrendIfNeeded,
  switchTrendPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);