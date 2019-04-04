import axios from 'axios';
import { fromJS } from 'immutable';
import {
  HeaderActionTypes,
  CommonActionTypes
} from '../constants/ActionTypes';

const fetchTrendsSuccess = trend => ({
  type: HeaderActionTypes.FETCH_SEARCH_TREND_SUCCESS,
  trend: fromJS(trend),
  totalPage: Math.ceil(trend.length / 10)
});

const fetchTrendsFailed = error => ({
  type: CommonActionTypes.REQUEST_FAILED,
  error: fromJS(error)
});

export const fetchTrendIfNeeded = () => (dispatch, getState) => {
  const state = getState();
  const trend = state.getIn(['header', 'trend']);
  if (trend.size === 0) {
    axios.get('api/trend_list.json').then(
      res => dispatch(fetchTrendsSuccess(res.data)),
      err => dispatch(fetchTrendsFailed(err))
    );
  }
};

const changeTrendPage = pageNo => ({
  type: HeaderActionTypes.CHANGE_TREND_PAGE,
  pageNo
});

export const switchTrendPage = () => (dispatch, getState) => {
  const state = getState();
  let currentPageNo = state.getIn(['header', 'trendPageNo']);
  const totalPage = state.getIn(['header', 'trendTotalPage']);
  let pageNo = ++currentPageNo > totalPage ? 1 : currentPageNo;
  dispatch(changeTrendPage(pageNo));
}