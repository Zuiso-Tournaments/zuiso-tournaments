ALTER TABLE "subditos" ALTER COLUMN "nombre" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "subditos" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "subditos" DROP COLUMN IF EXISTS "cuanto_de_gordo";