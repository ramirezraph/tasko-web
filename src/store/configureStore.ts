import { configureStore } from '@reduxjs/toolkit';
import { projectSlice } from 'pages/project/slice';
import { projectsSlice } from 'pages/projects/slice';
import { appSlice } from './appSlice';

export const store = configureStore({
   reducer: {
      appReducer: appSlice.reducer,
      projectsReducer: projectsSlice.reducer,
      projectReducer: projectSlice.reducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
