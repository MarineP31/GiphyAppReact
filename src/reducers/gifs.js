import { REQUEST_GIFS, FETCH_FAVORITED_GIFS, TRENDING_GIFS } from '../actions';

const initialState =  {
  data: [],
  favorites: [],
  trending: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state, 
        data: action.payload.data,
        total: action.payload.pagination.total_count
      };
      case TRENDING_GIFS:
      return {
        ...state, 
        trending: action.payload.data,
        total: action.payload.pagination.total_count
      };
    case FETCH_FAVORITED_GIFS:
      return {
        ...state,
        favorites: action.payload,
      }
    default:
      return state;
  }
}
