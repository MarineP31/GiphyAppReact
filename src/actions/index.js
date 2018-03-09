export const REQUEST_GIFS = 'REQUEST_GIFS';
export const FETCH_FAVORITED_GIFS = 'FETCH_FAVORITED_GIFS';

export function requestGifs(term = null) {
  return (dispatch) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=m85aKxATBh273ah984X5Jlq3k7bGAkBO`)
    .then(res => res.json())
    .then((data) => {
      dispatch({
        type: REQUEST_GIFS,
        payload: data
      });
    });
  }
}

export function favoriteGif({selectedGif}) {
  const localGif = JSON.parse(localStorage.getItem('items')) || [];

  return dispatch => {
      localGif.push(selectedGif);
      localStorage.setItem('items', JSON.stringify(localGif));
  }
}

export function unfavoriteGif({selectedGif}) {
  const localGif = JSON.parse(localStorage.getItem('items'))

  return dispatch => {
      const gifIndex = localGif.findIndex(x => x.id === selectedGif.id);
      localGif.splice(gifIndex, 1);
      localStorage.setItem('items', JSON.stringify(localGif));
  }
}

export function fetchFavoritedGifs() {
  return function(dispatch) {
    const localGif = JSON.parse(localStorage.getItem('items'))

    dispatch({
      type: FETCH_FAVORITED_GIFS,
      payload: localGif
    })
  }
}
