-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CelestialBody" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "solarMass" TEXT NOT NULL
);
INSERT INTO "new_CelestialBody" ("age", "id", "imageUrl", "name", "solarMass") SELECT "age", "id", "imageUrl", "name", "solarMass" FROM "CelestialBody";
DROP TABLE "CelestialBody";
ALTER TABLE "new_CelestialBody" RENAME TO "CelestialBody";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
