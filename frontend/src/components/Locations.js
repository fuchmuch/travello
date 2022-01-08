import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadLocations } from '../store/actions/LocationActions'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ locationState }) => {
    return { locationState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLocations: () => dispatch(LoadLocations())
    }
}

const Locations = (props) => {


    useEffect(() => {

        props.fetchLocations()
    }, [])


    return (
        <div>
            {props.locationState.locations.map((location) => (
                <div className='location-info'  key={location._id}>
                    <h4>{location.state}</h4>
                    <ul>
                        <li>
                        <img className='images' src= {location.url}/>
                        <Link to={`/locations/${location._id}`}>{location.state}</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
