import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
    get: async (req, res, next) => {
        try {
            if (req.query.challengeRating) {
                const monsters = await prisma.monsters.findMany({
                    where: {
                        challenge_rating: parseFloat(req.query.challengeRating),
                    },
                    include: {
                        types: true,
                        sizes: true,
                    },
                });
                return res.status(200).json(monsters);
            } else {
                // Return all monsters
                const monsters = await prisma.monsters.findMany();
                return res.status(200).json(monsters);
            }
        } catch (error) {
            next(error);
        }
    },
};
