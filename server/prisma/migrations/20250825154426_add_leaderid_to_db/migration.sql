/*
  Warnings:

  - Added the required column `leaderId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Room" ADD COLUMN     "leaderId" INTEGER NOT NULL;
