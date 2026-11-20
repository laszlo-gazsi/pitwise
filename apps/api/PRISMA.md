# Prisma cheat sheet

Run all commands from `apps/api`. Prisma has no notion of environments: the command decides the behaviour, `DATABASE_URL` in `.env` decides the target database.

## Commands

| Command | What it does |
|---|---|
| `npx prisma init` | One-time setup: creates `prisma/schema.prisma`, the config file and `.env` |
| `npx prisma validate` | Checks the schema, without touching the database |
| `npx prisma format` | Formats the schema and completes relation fields |
| `npx prisma migrate dev --name <name> --create-only` | Creates a migration from schema changes **without applying it**, so the SQL can be reviewed or edited |
| `npx prisma migrate dev` | Applies pending migrations to the dev database (creates one first if the schema changed) |
| `npx prisma generate` | Regenerates the TypeScript client into `src/generated/prisma` |
| `npx prisma migrate status` | Shows whether the database matches the migration files |
| `npx prisma db seed` | Runs the seed script configured in `prisma7.config.ts` |
| `npx prisma studio` | Data browser in the browser |
| `npx prisma migrate reset` | ⚠️ Drops the database and reapplies all migrations |
| `npx prisma migrate deploy` | **Production / CI only**: applies existing migrations, never creates or resets |

## After a schema change

```sh
npx prisma migrate dev --name <change> --create-only   # review the SQL
npx prisma migrate dev
npx prisma generate
```

## Rules

- Change the **schema**, not the generated SQL. Edit migration SQL by hand only for things Prisma cannot express (e.g. CHECK constraints).
- A migration that is already applied is never edited. Fix it with a new migration.
- Prisma 7 does not run `generate` or `seed` automatically after `migrate dev`.
- Commit `prisma/migrations/` and `migration_lock.toml`. Never commit `src/generated/`.
