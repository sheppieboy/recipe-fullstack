import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allRecipes = await prisma.recipe.findMany();
  console.log(allRecipes);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
