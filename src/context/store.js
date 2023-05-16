import { createStore } from "redux";
import { userData } from "./reducer/userData";

const store = createStore(userData);

export default store;
