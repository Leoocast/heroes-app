import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../controllers/heroes/selectors'
import { HeroCard } from './HeroCard'

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    const heroListStyles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-around"
    }

    return (
        <div style={heroListStyles} className="card-columns">
           {
               heroes.map(hero => <HeroCard key={hero.id} {...hero}/>)
           } 
        </div>
    )
}
