CREATE TABLE IF NOT EXISTS "peliculas" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL,
	"director" text NOT NULL,
	"genero" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
