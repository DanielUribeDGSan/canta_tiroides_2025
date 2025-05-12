import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';
import {
  AuthState,
  ImageProfile,
  ImageUser,
  Lenguage,
  User,
} from '../../interfaces/auth';
import { Constancia } from '../../interfaces/constancia';

const initialState: AuthState = {
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    add_user: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      setLocalStorage('user', state.user);
    },
    user_info: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      setLocalStorage('user', state.user);
    },
    update_lenguage: (state, { payload }: PayloadAction<Lenguage>) => {
      state.user = {
        ...state.user,
        idioma: payload.idioma,
      };
      setLocalStorage('user', state.user);
    },
    update_image: (state, { payload }: PayloadAction<ImageUser>) => {
      state.user = {
        ...state.user,
        image: payload.image,
      };
      setLocalStorage('user', state.user);
    },
    update_image_user: (state, { payload }: PayloadAction<ImageProfile>) => {
      state.user = {
        ...state.user,
        profileImage: payload.profileImage,
      };
      setLocalStorage('user', state.user);
    },
    update_constancia_user: (state, { payload }: PayloadAction<Constancia>) => {
      state.user = {
        ...state.user,
        constancia: payload.constancia + 1,
      };
      setLocalStorage('user', state.user);
    },
    sign_out: (state) => {
      state.user = {};
      setLocalStorage('user', state.user);
    },
    get_user: (state) => {
      state.user = getLocalStorage('user');
    },
  },
});

export const {
  user_info,
  add_user,
  sign_out,
  get_user,
  update_lenguage,
  update_image,
  update_image_user,
  update_constancia_user,
} = authSlice.actions;

export default authSlice.reducer;
