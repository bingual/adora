-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('Credentials', 'kakao', 'naver');

-- CreateTable
CREATE TABLE "User" (
    "idx" SERIAL NOT NULL,
    "username" CHAR(50) NOT NULL,
    "password" CHAR(100) NOT NULL,
    "name" CHAR(15) NOT NULL,
    "email" CHAR(50) NOT NULL,
    "contact" CHAR(13),
    "avatar" TEXT,
    "provider" "Provider" NOT NULL DEFAULT 'Credentials',
    "login_level" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "Brand" (
    "idx" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "Brand_group" (
    "idx" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_group_pkey" PRIMARY KEY ("idx")
);

-- CreateTable
CREATE TABLE "Product" (
    "idx" SERIAL NOT NULL,
    "brand_name" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "off_rate" INTEGER NOT NULL DEFAULT 0,
    "price" INTEGER NOT NULL DEFAULT 0,
    "origin_price" INTEGER NOT NULL DEFAULT 0,
    "thumbnail" TEXT NOT NULL,
    "category" TEXT,
    "stock_quantity" INTEGER NOT NULL DEFAULT 0,
    "views" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idx")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_name_key" ON "Brand"("brand_name");

-- AddForeignKey
ALTER TABLE "Brand_group" ADD CONSTRAINT "Brand_group_brand_name_fkey" FOREIGN KEY ("brand_name") REFERENCES "Brand"("brand_name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brand_name_fkey" FOREIGN KEY ("brand_name") REFERENCES "Brand"("brand_name") ON DELETE CASCADE ON UPDATE CASCADE;
