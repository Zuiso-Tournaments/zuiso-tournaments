CREATE TABLE IF NOT EXISTS "pollas" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"entro" boolean NOT NULL,
	"cuanto_de_gordo" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
