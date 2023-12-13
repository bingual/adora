import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
const db_accelerate = new PrismaClient().$extends(withAccelerate());
export default db_accelerate;
