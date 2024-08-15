CREATE TABLE IF NOT EXISTS "bikes_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"marca" varchar(255) NOT NULL,
	"modelo" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "motorbikes_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"marca" varchar(255) NOT NULL,
	"modelo" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
