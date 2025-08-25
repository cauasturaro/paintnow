// React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import { createRoom } from '../../services/RoomService';

export default function CreateGamePage() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState<string>("");
    const [error, setError] = useState<string | null>(null)

    const onJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            const roomId = await createRoom(nickname)
            console.error('Room created:', roomId);

            navigate(`/lobby/${roomId}`);
        } catch (error: any) {
            console.error('Room error:', error);
            setError(error.message || 'Erro ao tentar criar jogo')
        }
    }

    return (
        <div className='create-game-page'>
            <h1>Criar sala</h1>
            <form onSubmit={onJoin}>
                <input 
                    type='text'
                    name='name'  
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder='Digite seu nome'
                    required 
                />
                <button type='submit'>Pintar!</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}