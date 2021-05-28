import {FETCH_DATA, EDIT_DATA, POST_DATA, DELETE_DATA, LIKE_DATA} from '../actionTypes/constants';

export const memoriesReducers = (posts = [], action) => {
    switch(action.type) {
        case FETCH_DATA:
            return action.payload;
        case POST_DATA:
            return [...posts, action.payload];
        case EDIT_DATA:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_DATA:
            return posts.filter((post) => post._id === action.payload);
        case LIKE_DATA:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }

}