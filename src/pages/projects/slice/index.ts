import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from 'data/models';
import { useAppSelector } from 'utils/hooks';
import { ProjectsState } from './types';
import { RootState } from 'store/configureStore';

import projectsJson from 'data/projects.json';

const initialState: ProjectsState = {
   projects: projectsJson,
};

export const projectsSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      setProjects: (state, action: PayloadAction<{ projects: Project[] }>) => {
         state.projects = action.payload.projects;
      },
   },
});

export const selectProjects = (state: RootState) => state.projectsReducer;

export default projectsSlice.reducer;

export const useProjectsSlice = () => {
   return {
      slice: useAppSelector(selectProjects),
      actions: projectsSlice.actions,
   };
};
