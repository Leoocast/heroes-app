import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../controllers/heroes/selectors'

export const HeroeScreen = ({history}) => {

    const { heroeId } = useParams()
    
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])

    if(!hero)
        return <Redirect to="/"/>

    const {id, superhero, publisher, alter_ego, 
        first_appearance, characters} = hero

    const handleReturn = () => {
        if(history.length <= 2)
            history.push('/')

        history.goBack()
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/${id}.jpg`} alt=""  className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Apereance: </b> {first_appearance}
                    </li>
                </ul><br />
                <h5>Characters</h5>
                <p>{characters}</p>

                <button onClick={handleReturn} className="btn btn-outline-info">Return</button>
            </div>
        </div>
    )
}
