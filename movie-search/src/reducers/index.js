import { combineReducers } from "redux"
import mainPage from "./mainPage"
import moviePage from "./moviePage"

const rootReducer = combineReducers({
  mainPage,
  moviePage
})

export default rootReducer
