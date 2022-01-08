import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/ReviewActions'


const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(LoadReviews())
  }
}

const Reviews = (props) => {

  useEffect(() => {

    props.fetchReviews()
  }, [])

  return (
//     <div>
//         {props.reviewState.reviews.map((review) => (
//             <div className=''  key={review.id}>
//                 <ul>

//                     <Link to={`/review/${review.comment}`}>{review.name}</Link>
//                 </ul>
//             </div>
//         ))}
//     </div>
// )
// }

            <div>
            {props.reviewState.reviews.map((review) => (
                <div className='review-info'  key={review._id}>
                    <h4>{review.comment}</h4> 
                       <h2>{`/reviews/${review._id}`}</h2>
                       <h2>{review.name}</h2>
                       <h2>{review.rating}</h2>
                </div>
                
            ))}
        </div>
)
            }
      export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
