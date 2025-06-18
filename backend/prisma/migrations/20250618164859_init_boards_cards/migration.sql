-- CreateTable
CREATE TABLE "board" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT,

    CONSTRAINT "board_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" SERIAL NOT NULL,
    "board_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "gif" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "owner" TEXT,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "board"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
