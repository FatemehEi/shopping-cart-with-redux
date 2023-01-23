import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
