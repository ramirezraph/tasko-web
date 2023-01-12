import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from 'data/models';
import { RootState } from 'store/configureStore';
import { useAppSelector } from 'utils/hooks';
import { ProjectState } from './types';

const initialState: ProjectState = {
   projectId: '',
   projectTitle: '',
   projectMembers: [],

   columns: [],
   tasks: [],
};

export const projectSlice = createSlice({
   name: 'project',
   initialState,
   reducers: {
      setProjectId: (state, action: PayloadAction<{ id: string }>) => {
         state.projectId = action.payload.id;
      },
      setProjectTitle: (state, action: PayloadAction<{ title: string }>) => {
         state.projectTitle = action.payload.title;
      },
      setProjectMembers: (
         state,
         action: PayloadAction<{ members: UserProfile[] }>
      ) => {
         state.projectMembers = action.payload.members;
      },
   },
});

export const selectProject = (state: RootState) => state.projectReducer;

export default projectSlice.reducer;

export const useProjectSlice = () => {
   return {
      slice: useAppSelector(selectProject),
      actions: projectSlice.actions,
   };
};
