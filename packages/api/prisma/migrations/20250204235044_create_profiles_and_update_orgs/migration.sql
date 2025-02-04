-- CreateTable
CREATE TABLE "public"."Profiles" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID NOT NULL,
    "organisationId" UUID NOT NULL,
    "creatorId" UUID NOT NULL,
    "permissions" TEXT[],

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Teams" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "organisationId" UUID NOT NULL,
    "creatorId" UUID NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ProfilesToTeams" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL,

    CONSTRAINT "_ProfilesToTeams_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_userId_organisationId_key" ON "public"."Profiles"("userId", "organisationId");

-- CreateIndex
CREATE INDEX "_ProfilesToTeams_B_index" ON "public"."_ProfilesToTeams"("B");

-- AddForeignKey
ALTER TABLE "public"."Profiles" ADD CONSTRAINT "Profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profiles" ADD CONSTRAINT "Profiles_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "public"."organisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profiles" ADD CONSTRAINT "Profiles_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Teams" ADD CONSTRAINT "Teams_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "public"."organisations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Teams" ADD CONSTRAINT "Teams_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProfilesToTeams" ADD CONSTRAINT "_ProfilesToTeams_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProfilesToTeams" ADD CONSTRAINT "_ProfilesToTeams_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Teams"("id") ON DELETE CASCADE ON UPDATE CASCADE;
