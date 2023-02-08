import React from 'react'

const POKEMONS = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash'
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
    pokemon: HTMLInputElement
}



export default function Pokeguess() {
    const [hasWon, setHasWon] = React.useState(false)

    const handleSubmit = (event: React.FormEvent<Form>) => {
        event.preventDefault()
        const {pokemon} = event.currentTarget

        if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
            setHasWon(true)
            alert('You won!')
        } else {
            alert('Try again!')
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img
                height={512}
                width={512}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
                style={{imageRendering: 'pixelated', filter: hasWon ? 'none' : 'brightness(0)'}} />
            {hasWon ? (
                <button style={{width: '50%'}} onClick={() => window.location.reload()}>Play again</button>
            ) : (
                <form onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px ' }}>
                    <input name="pokemon" />
                    <button type="submit">Guess</button>
                </form>
            )}
        </div>
    )
}

