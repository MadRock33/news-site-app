import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Алексей Петров',
        avatarUrl: 'https://avatars.mds.yandex.net/i?id=0d3eb3bf9e9dec7753d98e34d002b611_l-4885656-images-thumbs&n=13',
        posts: {
            create: [
                {
                    title: 'Биткоин халвинг 2024',
                    content: 'Следующий халвинг биткоина запланирован...',
                    category: 'Криптовалюты'
                },
            ],
        },
    },
    // {
    //     name: 'Хуй',
    //     avatarUrl: 'https://avatars.mds.yandex.net/i?id=39aeec937670888574d383fd60d67a61_l-5221636-images-thumbs&n=13',
    //     posts: {
    //         create: [
    //             {
    //                 title: 'Биткоин халвинг 2077',
    //                 content: 'Свваввьаавыаазащ',
    //                 category: 'Ethereum',
    //                 image:"https://avatars.mds.yandex.net/i?id=138b16d8e710356c1c1e2d2f7d17dc0d_l-5495066-images-thumbs&n=13"
    //             },
    //         ],
    //     },
    // },





];

export async function main() {
    console.log('Starting seed...');
    try {
        for (const u of userData) {
            await prisma.user.create({ data: u });
            console.log(`Created user: ${u.name}`);
        }
        console.log('Seed completed successfully');
    } catch (error: any) {
        // Если данные уже существуют, это нормально
        if (error.code === 'P2002') {
            console.log('Data already exists, skipping seed');
        } else {
            console.error('Seed error:', error);
            throw error;
        }
    } finally {
        await prisma.$disconnect();
    }
}

// Запускаем seed только если файл вызван напрямую
if (require.main === module) {
    main().catch((error) => {
        console.error(error);
        process.exit(1);
    });
}