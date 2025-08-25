//React
import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Services
import { playersInRoom } from '../../services/RoomService';

export default function LobbyPage() {
    const { roomId } = useParams<{ roomId: string }>();

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try{ 
            const roomLink = `${window.location.origin}/join/${roomId}`;
            await navigator.clipboard.writeText(roomLink);
            setCopied(true);

            setTimeout(() => setCopied(false), 1500);
        } catch (error) {
            console.error('Erro ao copiar link da sala:', error);
        }
    };

    const [players, setPlayers] = useState<number[]>([]);
    // A ideia é colocar para toda vez que alguém entrar (websocket)
    const onUpdatePlayers = async () => {
        if (!roomId) {
            console.error('roomId is undefined');
            return;
        }
        try{
            const response = await playersInRoom(roomId);
            setPlayers(response.players);
            console.log('Players: ', response);
        } catch (error) {
            console.error('Erro ao buscar por usuários na sala:', error);
        }
    }

    return (
        <div className="lobby-page">
            <h2>Jogadores na sala:</h2>
            <ul>
                {players.map((player, idx) => (
                <li key={idx}>{player}</li>
                ))}
            </ul>

            <button onClick={onUpdatePlayers}>Atualizar jogadores</button>
            <button onClick={handleCopy}>
                {copied ? "Copiado" : "Copiar link"}
            </button>
        </div>
    );
}