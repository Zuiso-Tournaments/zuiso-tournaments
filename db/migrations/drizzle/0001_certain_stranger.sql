CREATE TABLE IF NOT EXISTS "car" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"deMierda" boolean NOT NULL,
	"cm" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
