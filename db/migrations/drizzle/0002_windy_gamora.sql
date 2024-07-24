CREATE TABLE IF NOT EXISTS "subditos" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"nombre" varchar(256) NOT NULL,
	"cuanto_de_gordo" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
