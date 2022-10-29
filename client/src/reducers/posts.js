export default (posts = [], action) => {
    switch(action.type){
        case 'UPDATE':
            //mapping over posts array and changing something in array
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}