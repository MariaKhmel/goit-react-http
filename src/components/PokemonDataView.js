export const PokemonDataView = ({ pokemon: { sprites, name, stats } }) => {
    console.log(stats)
    return <>
        <img
            src={sprites.other['official-artwork'].front_default}
            width="240"
            height="100"
            alt={name}
        />
        <h2>{name}</h2>
        {stats.map(entry => (
            <li key={entry.stat.name}> {entry.stat.name}: {entry.base_stat}</li>
))}
    </>
}