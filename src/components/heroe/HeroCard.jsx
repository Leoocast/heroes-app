import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    
    const cardStyles = {
        maxWidth: 540,
    }

    return (
        <div className="card sm-3 mt-5" style={cardStyles}>
            <div className="row no-gutters">
                <div className="col-sm-4">
                    <img  src={`./assets/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{characters}</p>
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <div className="col-sm-12">
                            <Link className="btn btn-dark btn-block" to={`hero/${id}`}>
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
