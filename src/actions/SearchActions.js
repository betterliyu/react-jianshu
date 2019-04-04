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

export const switchTrendPage = pageNo => ({
  type: HeaderActionTypes.SWITCH_TREND_PAGE,
  pageNo
});