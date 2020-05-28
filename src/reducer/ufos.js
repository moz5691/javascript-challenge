import { data } from '../data/data';

const ufosReducer = (state, action) => {
  // make this part better...? copy clean data to state all the time.
  state = data;

  switch (action.type) {
    case 'POPULATE_UFOS':
      return action.ufos;

    case 'SEARCH_BY_DATE':
      state = state.filter((s) => s.datetime === action.query);
      return state;

    case 'SEARCH_BY_CITY':
      state = state.filter((s) => s.city === action.query);
      return state;

    case 'SEARCH_BY_STATE':
      state = state.filter((s) => s.state === action.query);
      return state;

    case 'SEARCH_BY_COUNTRY':
      state = state.filter((s) => s.country === action.query);
      return state;

    case 'SEARCH_BY_SHAPE':
      state = state.filter((s) => s.shape === action.query);
      return state;

    default:
      return state;
  }
};

export { ufosReducer as default };
