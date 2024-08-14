ALTER TABLE "car" RENAME TO "cars_table";--> statement-breakpoint
ALTER TABLE "cars_table" RENAME COLUMN "user_id" TO "marca";--> statement-breakpoint
ALTER TABLE "cars_table" RENAME COLUMN "deMierda" TO "modelo";--> statement-breakpoint
ALTER TABLE "cars_table" ALTER COLUMN "marca" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "cars_table" ALTER COLUMN "modelo" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "cars_table" ALTER COLUMN "modelo" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cars_table" DROP COLUMN IF EXISTS "cm";