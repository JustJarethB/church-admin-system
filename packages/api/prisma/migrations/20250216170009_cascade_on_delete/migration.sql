-- DropForeignKey
ALTER TABLE "public"."Profiles" DROP CONSTRAINT "Profiles_organisationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Profiles" DROP CONSTRAINT "Profiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Teams" DROP CONSTRAINT "Teams_organisationId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Profiles" ADD CONSTRAINT "Profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Profiles" ADD CONSTRAINT "Profiles_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "public"."organisations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Teams" ADD CONSTRAINT "Teams_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "public"."organisations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
