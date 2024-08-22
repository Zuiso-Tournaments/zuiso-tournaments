CREATE TABLE IF NOT EXISTS "coffe_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"variety" text,
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
CREATE TABLE IF NOT EXISTS "movil_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"marca" text,
	"modelo" text,
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
