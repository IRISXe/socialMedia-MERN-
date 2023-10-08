import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Posts:{},
};

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        getPosts(state,action){
            state.posts = action.payload;
        },
    },
});

export default postSlice.reducer;

export function SetPosts(post) {
    return(dispatch,getstate)=>{
        dispatch(postSlice.action.getPosts(post));
    };
}