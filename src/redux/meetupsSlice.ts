import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { Meetup } from '../models/Meetup.model';
import { getMeetups, postMeetup } from '../services/meetups.http.service';
import { constructMeetupsList } from '../utils/utils';

export interface MeetupsState {
    entityList: Meetup[];
    isLoading: boolean;
    isLoaded: boolean;
}

const initialState: MeetupsState = {
    entityList: [],
    isLoading: false,
    isLoaded: false,
};

export const forceFetchMeetups = createAsyncThunk(
    'meetups/fetchMeetups',
    async () => {
        const response = await getMeetups();
        // The value we return becomes the `fulfilled` action payload
        return constructMeetupsList(response);
    }
);

export const addMeetup = createAsyncThunk(
    'meetups/addMeetup',
    async (newMeetup: Meetup) => {
        const response = await postMeetup(newMeetup);
        newMeetup.id = response.data.name;
        return newMeetup;
    }
);

export const meetupsSlice = createSlice({
    name: 'meetups',
    initialState,
    reducers: {
        toggleIsFavAction: (state, action: PayloadAction<string>) => {
            state.entityList = state.entityList.map(meetup => {
                if (meetup.id === action.payload) {
                    meetup.isFavorite = !meetup.isFavorite;
                }
                return meetup;
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(forceFetchMeetups.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forceFetchMeetups.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoaded = true;
                state.entityList = action.payload.reverse();
            })
            .addCase(addMeetup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addMeetup.fulfilled, (state, action) => {
                state.entityList = [action.payload, ...state.entityList];
                state.isLoading = false;
            })
    },
});

// eslint-disable-next-line
export const { toggleIsFavAction } = meetupsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMeetups = (state: RootState) => state.meetups.entityList;
export const selectFavoriteMeetups = (state: RootState) => state.meetups.entityList.filter(meetup => meetup.isFavorite);
export const selectFavoriteMeetupsCount = (state: RootState) => state.meetups.entityList.filter(meetup => meetup.isFavorite).length;
export const selectIsLoading = (state: RootState) => state.meetups.isLoading;
export const selectIsLoaded = (state: RootState) => state.meetups.isLoaded;

export const fetchMeetupsIfNeeded = (): AppThunk => (
    dispatch,
    getState
) => {
    const isLoaded = selectIsLoaded(getState());
    if (!isLoaded) {
        dispatch(forceFetchMeetups());
    }
};

export default meetupsSlice.reducer;
