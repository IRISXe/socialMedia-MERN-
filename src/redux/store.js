import {configureStore} from "@reduxjs/toolkit"
import {rootreducer} from "./reducer";


const store = configureStore({
    reducer:rootreducer,
});

const {dispatch } = store;

export default store;

export {store, dispatch};
