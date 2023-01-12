import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from 'data/models';
import { useAppSelector } from 'utils/hooks';
import { RootState } from './configureStore';
import { AppState } from './types';

import projectsJson from 'data/projects.json';

const initialState: AppState = {
   projects: projectsJson,
};

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {},
});

export const selectApp = (state: RootState) => state.appReducer;

export default appSlice.reducer;

export const useAppSlice = () => {
   return {
      slice: useAppSelector(selectApp),
      actions: appSlice.actions,
   };
};
