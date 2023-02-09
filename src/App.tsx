import React from 'react'
const pokemons = [
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
    'sandslash',
    'nidoran',
    'nidorina',
    'nidoqueen',
    'nidoran',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb',
    'electrode',
    'exeggcute',
    'exeggutor',
    'cubone',
    'marowak',
    'hitmonlee',
    'hitmonchan',
    'lickitung',
    'koffing',
    'weezing',
    'rhyhorn',
    'rhydon',
    'chansey',
    'tangela',
    'kangaskhan',
    'horsea',
    'seadra',
    'goldeen',
    'seaking',
    'staryu',
    'starmie',
    'mr mime',
    'scyther',
    'jynx',
    'electabuzz',
    'magmar',
    'pinsir',
    'tauros',
    'magikarp',
    'gyarados',
    'lapras',
    'ditto',
    'eevee',
    'vaporeon',
    'jolteon',
    'flareon',
    'porygon',
    'omanyte',
    'omastar',
    'kabuto',
    'kabutops',
    'aerodactyl',
    'snorlax',
    'articuno',
    'zapdos',
    'moltres',
    'dratini',
    'dragonair',
    'dragonite',
    'mewtwo',
    'mew'
];


const MATCH = Math.floor(Math.random() * pokemons.length);

type Form = HTMLFormElement & {
    pokemon: HTMLInputElement
}

export default function Pokeguess() {
    const [hasWon, setHasWon] = React.useState(false)
    const [start, setStart] = React.useState(false)
    const [wrong, setWrong] = React.useState(false)

    console.log(pokemons[MATCH])
    const handleSubmit = (event: React.FormEvent<Form>) => {
        setStart(true)
        event.preventDefault()
        const { pokemon } = event.currentTarget

        if (pokemon.value.toLowerCase() === pokemons[MATCH]) {
            setHasWon(true)
            setWrong(false)
        } else {
            setWrong(true)
            pokemon.autofocus = true
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src="/who.png" height={100} style={{ imageRendering: 'pixelated' }} alt="" />
            <img src="/pokemon.png" height={100} style={{ imageRendering: 'pixelated' }} alt="" />
            <div className="nes-badge">
                {start &&
                    (<>{wrong ?
                        (<span className="is-error">Try Again<i className="nes-icon close is-small"></i></span>) :
                        (<span className="is-success">You Won!<i className="nes-icon trophy is-small"></i></span>)}</>)
                }
            </div>
            <div style={{ height: '300px' }}>
                <img
                    height={300}
                    width={300}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`}
                    style={{ imageRendering: 'pixelated', filter: hasWon ? 'none' : 'brightness(0)' }}
                />
            </div>

            {hasWon ? (
                <div style={{ height: '100px' }}>
                    <button style={{ width: '100%' }} className='nes-btn' onClick={() => location.reload()} autoFocus>Play again</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px ' }}>
                    <div className="nes-field">
                        <input type="text" name="pokemon" className="nes-input" autoFocus />
                    </div>
                    <button type="submit" className='nes-btn'>Guess</button>
                </form>
            )}
        </div>
    )
}

