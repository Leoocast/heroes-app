import { heroes } from "./heroes";

export const getHeroesByPublisher = publisher => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher))
        throw new Error(`Publisher: "${publisher}" no válido`)

    return heroes.filter(heroe => heroe.publisher === publisher)
}

export const getHeroesById = id => heroes.find(heroe => heroe.id === id)