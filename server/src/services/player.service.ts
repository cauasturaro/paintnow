import { PrismaClient } from '../generated/prisma'
import { z } from 'zod';

const prisma = new PrismaClient();

const createPlayerSchema = z.object({
    nickname: z.string().min(1, 'Por favor, insira um nick!').max(25, 'O tamanho máximo é 25 caracteres'),
    roomId: z.string()
});

export const join = async (playerData: any) => {
    const { nickname, roomId } = createPlayerSchema.parse(playerData);

    const player = await prisma.player.create({
        data : {
            nickname,
            roomId
        }
    });

    return { id: player.id, nickname: player.nickname, room: roomId };
}

export const leave = async (id: any) => {
    await prisma.player.delete({
        where: { id: id }
    });
}

