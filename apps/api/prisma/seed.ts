import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { DEFAULT_MAKES } from './DefaultMakes.js';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

const doSeed = async () => {
  for (const name of DEFAULT_MAKES) {
    await prisma.make.upsert({
      create: { name },
      update: {},
      where: { name },
    });
  }
};

doSeed()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => {
    prisma.$disconnect();
  });
