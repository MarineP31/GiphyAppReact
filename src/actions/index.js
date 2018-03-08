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

// export function favoriteGif({selectedGif}) {
//   const userUid = Firebase.auth().currentUser.uid;
//   const gifId = selectedGif.id;

//   return dispatch => Firebase.database().ref(userUid).update({
//     [gifId]: selectedGif
//   });
// }

// export function unfavoriteGif({selectedGif}) {
//   const userUid = Firebase.auth().currentUser.uid;
//   const gifId = selectedGif.id;

//   return dispatch => Firebase.database().ref(userUid).child(gifId).remove();
// }

// export function fetchFavoritedGifs() {
//   return function(dispatch) {
//     const userUid = Firebase.auth().currentUser.uid;

//     Firebase.database().ref(userUid).on('value', snapshot => {
//       dispatch({
//         type: FETCH_FAVORITED_GIFS,
//         payload: snapshot.val()
//       })
//     });
//   }
// }