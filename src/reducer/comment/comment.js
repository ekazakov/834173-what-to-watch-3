import {ActionCreator as DataActionCreator} from "../data/data.js";

const initialState = {
  newComment: {},
};

const ActionType = {
  POST_COMMENT: `POST_COMMENT`,
};

const ActionCreator = {
  postNewComment: (newComment) => {
    return {
      type: ActionType.POST_COMMENT,
      payload: newComment,
    };
  },
};

const Operation = {
  postComment: (commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commentData.id}`, {
      rating: commentData.rating,
      comment: commentData.comment,
    })
      .then(() => {
        dispatch(ActionCreator.postNewComment(commentData));
      })
      .then((response) => {
        dispatch(DataActionCreator.loadComments(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POST_COMMENT:
      return Object.assign({}, state, {
        newComment: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
