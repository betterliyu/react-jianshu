import { fromJS } from 'immutable';
import { HeaderActionTypes } from '../constants/ActionTypes';

const defaultState = fromJS({
  trend: [],
  trendPageNo: 1,
  trendTotalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HeaderActionTypes.FETCH_SEARCH_TREND_SUCCESS:
      return state.merge({
        trend: action.trend,
        trendTotalPage: action.totalPage
      });
    case HeaderActionTypes.CHANGE_TREND_PAGE:
      return state.set('trendPageNo', action.pageNo);
    default:
      break;
  }
  return state;
};