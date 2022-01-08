const { LOCATION_LOADING_TYPE, GET_PLACES } = require('../types')

const iState = {
  places: [],
  placesLoading: '' 
}

const PlaceReducer = (state = iState, action) => {
  switch (action.type) {
    case LOCATION_LOADING_TYPE:
      return { ...state, placesLoading: action.payload }
    case GET_PLACES:
      return { ...state, places: action.payload }
    default:
      return { ...state }
  }
}
export default PlaceReducer
