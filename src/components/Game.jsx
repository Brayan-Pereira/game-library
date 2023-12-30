export default function Game({games, onRemove}) {
    return (<div className="game">
        {games.map((game) => (
            <div key={game.id} className="game__uni">
                <img src={game.cover} />
                <div>
                    <h2>{game.title}</h2>
                    <button onClick={() => onRemove(game.id)}>Remover</button>
                </div>
            </div>
        )
        )}
    </div>)

}