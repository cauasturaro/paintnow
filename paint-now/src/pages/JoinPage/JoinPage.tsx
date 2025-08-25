export default function JoinPage({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLFormElement>) => void }) {
    return (
        <div className="join-page">
            <h1>Join the game</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="name"   
                    placeholder="Enter your name" 
                    required 
                />
                <button type="submit">Let me paint!</button>
            </form>
        </div>
    );
}
