import {
    GetPlaces
  } from '../../services/PlaceService'
  import { GET_PLACES } from '../types'
  
  export const LoadPlaces= () => {
    return async (dispatch) => {
      try {
        const places = await GetPlaces()
        dispatch({
          type: GET_PLACES,
          payload: places
        })
      } catch (error) {
        throw error
      }
    }
  }
  