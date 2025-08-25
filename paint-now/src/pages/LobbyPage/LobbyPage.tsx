export default function LobbyPage({ players, onStartGame }: { players: { name: string }[]; onStartGame: () => void; }) {
    return (
        <div className="lobby-page">
            <h1>Lobby</h1>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name}</li>
                ))}
            </ul>

            <button onClick={onStartGame}>Start Game</button>
        </div>
    );
}
