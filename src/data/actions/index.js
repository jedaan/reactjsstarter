import * as type from './type';

export const fetchPrivateData = () => async (dispatch, getState, api) => {
  console.log('fetchData');
  let res = 'private page ... !!! ';
  dispatch({
    type: type.FETCH_PRIVATE_DATA,
    payload: response.data
  });
  // await api.post("/......")
  //   .then(response => {
  //     dispatch({
  //       type: type.FETCH_DATA,
  //       payload: response.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log('error - fetchData', error.response);
  //   });
};

export const fetchPublicData = () => async (dispatch, getState, api) => {
  // try {
  console.log('fetchPublicData');
  let res = 'public page ... !!! ';
  dispatch({
    type: type.FETCH_PUBLIC_DATA,
    payload: res
  });
  // await api.post("/......")
  // .then(response => {
  //   dispatch({
  //     type: type.FETCH_DATA,
  //     payload: response.data
  //   });
  // })
  // .catch(error => {
  //   console.log('error - fetchData', error.response);
  // });
};

export const logOut = () => async (dispatch, getState, api) => {
  try {
    console.log('logout');
    localStorage.clear();
    dispatch({
      type: type.SUCCESS_LOG_OUT,
      payload: false
    });
  } catch (e) {
    console.log('error - logOut ', e.message);
  }
};