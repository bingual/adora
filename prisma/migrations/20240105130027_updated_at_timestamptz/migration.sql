/*
  Warnings:

  - Made the column `updated_at` on table `Brand_group` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Brand_group" ALTER COLUMN "updated_at" SET NOT NULL;
