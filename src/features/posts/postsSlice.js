import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
    {
        id: 1,
        title: 'Hello World',
        content: 'This is my first post',
        date: sub(new Date(), { days: 1 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: 2,
        title: 'Hello World 2',
        content: 'This is my second post',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title, content, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                };
            },
        },
        reactionAdded: (state, action) => {
            const { reaction, postId } = action.payload;
            const post = state.find((p) => p.id === postId);
            post.reactions[reaction]++;
        },
    },
});
export const selectAllPosts = (state) => state.posts;

export const { addPost, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
