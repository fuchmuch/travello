import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadPlaces } from '../store/actions/PlaceActions'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ placeState }) => {
  return { placeState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: () => dispatch(LoadPlaces())
  }
}

const Places = (props) => {
  
  useEffect(() => {

    props.fetchPlaces()
  }, [])

  return (
    <div>
      <ul>
      {props.placeState.places.map((place) => (
        <li className='' key={place._id}>
          <h2>{place.name}</h2>
          <h3>{place.price}</h3>
          <h3>{place.petsallow}</h3>
            <h4>{place.description} </h4>
            <img src= {place.image} />
            <Link to={`/places/${place.image}`}>{place.name}</Link>
          </li>
       
      ))}
      </ul>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Places)
