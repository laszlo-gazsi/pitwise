import { Prisma } from '../generated/prisma/client.js';

enum PrismaError {
  UNIQUE_CONFLICT = 'P2002',
  FOREIGN_KEY_CONFLICT = 'P2003',
}

export function isError(e: unknown, code: string): boolean {
  return e instanceof Prisma.PrismaClientKnownRequestError && e.code === code;
}

export function isUniqueConflictError(e: unknown): boolean {
  return isError(e, PrismaError.UNIQUE_CONFLICT);
}

export function isForeignKeyConflictError(e: unknown): boolean {
  return isError(e, PrismaError.FOREIGN_KEY_CONFLICT);
}
