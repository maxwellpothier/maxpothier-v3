/*
  Warnings:

  - You are about to drop the column `albumId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postId]` on the table `Album` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_albumId_fkey";

-- DropIndex
DROP INDEX "Post_albumId_key";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "albumId",
ADD COLUMN     "subtitle" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ListenLater" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ListenLater_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlbumToListenLater" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToListenLater_AB_unique" ON "_AlbumToListenLater"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToListenLater_B_index" ON "_AlbumToListenLater"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Album_postId_key" ON "Album"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_title_key" ON "Post"("title");

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListenLater" ADD CONSTRAINT "ListenLater_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToListenLater" ADD CONSTRAINT "_AlbumToListenLater_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToListenLater" ADD CONSTRAINT "_AlbumToListenLater_B_fkey" FOREIGN KEY ("B") REFERENCES "ListenLater"("id") ON DELETE CASCADE ON UPDATE CASCADE;
