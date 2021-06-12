import { heroes } from "./heroes";

export const getHeroesByPublisher = publisher => {
    
    const validPublisher = ['DC Comics', 'Marvel Comics']

    if(!validPublisher.includes(publisher))
        throw new Error(`Publisher: "${publisher}" no válido`)

    return heroes.filter(heroe => heroe.publisher === publisher)
}

export const getHeroesById = id => heroes.find(heroe => heroe.id === id)

export const getHeroesByAll = input => {

    console.log("Hola")

    if(input === "")
        return heroes

    input = input.toLocaleLowerCase()

    return heroes.filter(hero => 
        hero.superhero.toLocaleLowerCase().includes(input)
    ||  hero.characters.toLocaleLowerCase().includes(input)
    ||  hero.alter_ego.toLocaleLowerCase().includes(input)
    )
}