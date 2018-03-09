import { REQUEST_GIFS, FETCH_FAVORITED_GIFS } from '../actions';

const initialState =  {
  data: [],
  favorites: [],
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state, 
        data: action.payload.data
      };
    case FETCH_FAVORITED_GIFS:
    console.log(action.payload)
      return {
        ...state,
        favorites: action.payload,
      }
    default:
      return state;
  }
}
