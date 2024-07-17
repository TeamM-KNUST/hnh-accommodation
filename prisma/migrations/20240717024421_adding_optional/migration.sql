/*
  Warnings:

  - You are about to drop the column `description` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "description",
ALTER COLUMN "capacity" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;
