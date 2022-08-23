import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Vardan Aper' },
    { id: 2, name: 'Gevor Aper' },
    { id: 3, name: 'Tanya Vardanovna' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
