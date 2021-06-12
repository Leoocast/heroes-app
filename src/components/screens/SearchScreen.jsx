import React, { useState, useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroe/HeroCard'
import { getHeroesByAll } from '../../controllers/heroes/selectors'

export const SearchScreen = ({history, location}) => {

    const { q = '' } = queryString.parse(location.search)
    
    const [search, setSearch] = useState(q)

    const heroesFilter = useMemo(() => getHeroesByAll(q), [q])

    const handleInputChange = ({target}) => setSearch(target.value.toLocaleLowerCase())
    
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${search}`)
    }

    const styleHeroContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }

    return (
        <div>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <form onSubmit={handleSearch}>
                    <div className="col-12">
                        <h5>Type your hero:</h5>
                        <input 
                            className="form-control"
                            placeholder="Press enter to search"
                            type="text" 
                            value={search}
                            onChange={handleInputChange} />
                    </div>
                </form>
                {
                    (q !== '' && heroesFilter.length === 0) &&
                    <div className="aler alert-info">
                        There is no hero with "{q}""
                    </div>
                }
                <div style={styleHeroContainer} className="col 12">
                    {
                        heroesFilter.map(hero => <HeroCard key={hero.id} {...hero}/>)
                    }
                </div>
            </div>
        </div>
    )
}
