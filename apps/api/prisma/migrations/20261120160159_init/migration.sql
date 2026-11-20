-- CreateTable
CREATE TABLE "vehicles" (
    "id" SERIAL NOT NULL,
    "license_plate" TEXT,
    "name" TEXT,
    "vin" VARCHAR(17),
    "make_id" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "makes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "makes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "vehicles_make_id_idx" ON "vehicles"("make_id");

-- CreateIndex
CREATE UNIQUE INDEX "makes_name_key" ON "makes"("name");

-- AddForeignKey
ALTER TABLE "vehicles" ADD CONSTRAINT "vehicles_make_id_fkey" FOREIGN KEY ("make_id") REFERENCES "makes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
