import {configurestore} from "@reduxjs/toolkit"
import {rootRouter} from "./reducer";


const store = configurestore({
    reducer:rootreducer,
});

const {dispatch } = store;

export {store, dispatch};
