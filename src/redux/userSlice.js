import {createSlice, userSlice} from "@reduxjs/toolkit";


const initialState ={
    users: JSON.parse(window?.localStorage.getItem("user"))??{},
    edit:false,
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducer:{
        login(state,action){
            state.user = action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload));
        },
        logout(state){
            state.user = null;
            localStorage?.removeItem("user");
        },
    },
});
export default userSlice.reducer;

export function UserLogin(user){
    return(dispatch,getstate) =>{
        dispatch(userSlice.actions.login(user));
    };
}

export function Logout(){
    return(dispatch,getstate) =>{
        dispatch(userSlice.actions.logout());
    };
}

export function UpdateProfile(val){
    return(dispatch,getstate) =>{
        dispatch(userSlice.actions.UpdateProfile(val));
    };
}