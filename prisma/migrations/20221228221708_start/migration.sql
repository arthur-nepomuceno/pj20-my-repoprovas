-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "emai" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_emai_key" ON "users"("emai");
