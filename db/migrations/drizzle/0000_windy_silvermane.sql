CREATE TABLE IF NOT EXISTS "tabla_bocadillos" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"deMierda" boolean NOT NULL,
	"cm" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "examples" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"text" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pollas" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"entro" boolean NOT NULL,
	"cuanto_de_gordo" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tabla_marcos" (
	"id" serial PRIMARY KEY NOT NULL,
	"tarea" text NOT NULL,
	"done" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "films" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"watched" boolean NOT NULL,
	"priority" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
