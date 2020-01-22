import {
  initialState,
  ACTION_SET_ARTICLE,
  ACTION_UNSET_ARTICLE
} from './constants';

function reducer(state, action) {
  switch (action.type) {
    case ACTION_SET_ARTICLE:
      return action.payload;
    case ACTION_UNSET_ARTICLE:
      return initialState;
    default:
      throw new Error('unknown action');
  }
}

export default reducer;
