import {
    GetReviews,
    AddReviews,
    UpdateReviews
  } from '../../services/ReviewService'
  import { GET_REVIEWS, ADD_REVIEWS, UPDATE_REVIEWS } from '../types'
  
  export const LoadReviews= () => {
    return async (dispatch) => {
      try {
        const reviews = await GetReviews()
        dispatch({
          type: GET_REVIEWS,
          payload: reviews
        })
      } catch (error) {
        throw error
      }
    }
  }

  export const CreateReviews= () => {
    return async (dispatch) => {
      try {
        const reviews = await AddReviews()
        dispatch({
          type: ADD_REVIEWS,
          payload: reviews
        })
      } catch (error) {
        throw error
      }
    }
  }
  
  export const RenewReviews= () => {
    return async (dispatch) => {
      try {
        const reviews = await UpdateReviews()
        dispatch({
          type: UPDATE_REVIEWS,
          payload: reviews
        })
      } catch (error) {
        throw error
      }
    }
  }
  