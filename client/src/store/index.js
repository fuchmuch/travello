import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import LocationReducer from './reducers/LocationReducer'
import thunk from 'redux-thunk'
import PlaceReducer from './reducers/PlaceReducer'
import ReviewReducer from './reducers/ReviewReducer'


const store = createStore(
  combineReducers({
    locationState: LocationReducer,
    placeState: PlaceReducer,
    reviewState: ReviewReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store