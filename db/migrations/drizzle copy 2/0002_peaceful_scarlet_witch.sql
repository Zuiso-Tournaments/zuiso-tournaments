CREATE TABLE IF NOT EXISTS "films" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"watched" boolean NOT NULL,
	"priority" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
