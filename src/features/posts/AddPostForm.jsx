import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { addPost } from './postsSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const titleCheckedValue = title.trim();
    const contentCheckedValue = content.trim();

    const onSavePostClicked = () => {
        if (titleCheckedValue && contentCheckedValue) {
            dispatch(addPost(titleCheckedValue, contentCheckedValue, userId));
            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    const canSave =
        Boolean(titleCheckedValue) &&
        Boolean(contentCheckedValue) &&
        Boolean(userId);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section className='addPost-container'>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postAuthor'>Author:</label>
                <select
                    id='postAuthor'
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=''></option>
                    {usersOptions}
                </select>
                <label htmlFor='postContent'>Post Content:</label>
                <textarea
                    name='postContent'
                    id='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    disabled={!canSave}
                    type='button'
                    onClick={onSavePostClicked}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
