const { REVIEW_LOADING_TYPE, GET_REVIEWS } = require('../types')

const iState = {
  reviews: [],
  reviewsLoading: '' 
}

const ReviewReducer = (state = iState, action) => {
  switch (action.type) {
    case REVIEW_LOADING_TYPE:
      return { ...state, reviewsLoading: action.payload }
    case GET_REVIEWS:
      return { ...state, reviews: action.payload }
    //   case ADD_REVIEWS:
    //   return { ...state, reviews: action.payload }
    //   case UPDATE_REVIEWS:
    //   return { ...state, reviews: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewReducer
