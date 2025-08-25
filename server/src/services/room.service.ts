// Imports
import { PrismaClient } from '../generated/prisma'
import { z } from 'zod';

const prisma = new PrismaClient();

const createPlayerSchema = z.object({
    nickname: z.string().min(1, 'Por favor, insira um nick!').max(25, 'O tamanho máximo é 25 caracteres'),
});

export const createRoom = async (playerData: string) => {
    const room = await prisma.room.create({
        data: {}
    });

    const { nickname } = createPlayerSchema.parse(playerData);

    const player = await prisma.player.create({
        data : {
            nickname,
            roomId: room.id
        }
    });

    await prisma.room.update({
        where: { id: room.id },
        data: { leaderId: player.id }
    })
    
    return room.id;
}

export const deleteRoom = async (id: string) => {
    await prisma.room.delete({
        where: { id: id }
    });
}

export const playersInRoom = async (id: string) => {
    const players = await prisma.player.findMany({
        where: { roomId: id },
        select: { nickname: true }
    });

    const nicknames = players.map(p => p.nickname)

    return nicknames
}