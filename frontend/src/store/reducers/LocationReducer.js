
const { LOCATION_LOADING_TYPE, GET_LOCATIONS } = require('../types')

const iState = {
  locations: [],
  locationsLoading: '' 
}

const LocationReducer = (state = iState, action) => {
  switch (action.type) {
    case LOCATION_LOADING_TYPE:
      return { ...state, locationsLoading: action.payload }
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    default:
      return { ...state }
  }
}

export default LocationReducer