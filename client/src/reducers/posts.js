import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch(action.type){
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);        
        case UPDATE:
        case LIKE:
            // LIKE can do the same thing as update
            //mapping over posts array and changing something in array
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}