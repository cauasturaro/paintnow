// Imports
import express from 'express';
import cors from 'cors';
// Routes
import playerRoutes from '../src/routes/player.routes';
import roomRoutes from '../src/routes/room.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ 
    origin: "http://localhost:5173", 
    credentials:true 
}))

app.use('/player', playerRoutes);
app.use('/room', roomRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})