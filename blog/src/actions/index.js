import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder"

// Action Creaters in Action Creaters パターン
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // ポスト一覧取得
  await dispatch(fetchPosts())

  // ユーザーID重複排除
  const userIds = _.uniq(_.map(getState().posts, "userId"))
  // ユーザー名の取得
  userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts")
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  })
}

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  })
}

// memoizeパターン
// export const fetchUser = (id) => async dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   })
// })