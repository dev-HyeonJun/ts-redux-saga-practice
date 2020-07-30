import { getGithubUserProfile } from "../../api/github";
import { createAsyncAction, ActionType, createReducer } from "typesafe-actions";
import { AxiosError } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";

//action & actionCreator

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_FAILURE = "github/GET_USER_PROFILE_FAILURE";

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE
)<string, GithubUserProfile, AxiosError>();

// type & interface

export interface GithubUserProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

type GithubAction = ActionType<typeof getUserProfileAsync>;

interface GithubState {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubUserProfile | null;
  };
}

function* getUserProfileSaga(
  action: ReturnType<typeof getUserProfileAsync.request>
) {
  try {
    const userProfile: GithubUserProfile = yield call(
      getGithubUserProfile,
      action.payload
    );
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e) {
    yield put({
      type: GET_USER_PROFILE_FAILURE,
      payload: e,
      error: true,
    });
  }
}

export function* githubSaga() {
  yield takeLatest(GET_USER_PROFILE, getUserProfileSaga);
}

// 스토어 초기값

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

//리듀서

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload as GithubUserProfile,
    },
  }),
  [GET_USER_PROFILE_FAILURE]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload as AxiosError,
      data: null,
    },
  }),
});

export default github;
