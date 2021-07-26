-- CreateTable
CREATE TABLE "CelestialBody" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "solarMass" INTEGER NOT NULL
);
