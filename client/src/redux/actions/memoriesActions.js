import {FETCH_DATA, EDIT_DATA, POST_DATA, DELETE_DATA, LIKE_DATA} from '../actionTypes/constants';
import axios from 'axios'

export const getPostData = () => async(dispatch) => {
    try {
        const {data} = await axios.get('/getPosts');
        dispatch({
            type : FETCH_DATA,
            payload : data
        })
    } catch (error) {
        console.log(error);
    }
} 


export const PostData = (inputPosts) => async(dispatch) => {
    try {
        const {data} = await axios.post('/post', inputPosts);
        dispatch({
            type : POST_DATA,
            payload : data
        })
    } catch (error) {
        console.log(error);
    }
}

export const EditData = (id, memoryData) => async(dispatch) => {
    try {
        const {data} = await axios.patch(`/update/${id}`, memoryData);
        dispatch({
            type : EDIT_DATA,
            payload : data
        })
    } catch (error) {
        console.log(error)
    }
}

export const DeleteData = (id) => async(dispatch) => {
    try {
        const {data} = await axios.delete(`/delete/${id}`);
        dispatch({
            type : DELETE_DATA,
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateLike = (id) => async(dispatch) => {
    try {
        const {data} = await axios.patch(`/like/${id}`);
        dispatch({
            type : LIKE_DATA,
            payload : data
        });
    } catch (error) {
        console.log(error);
    }
}