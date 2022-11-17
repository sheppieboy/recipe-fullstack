// export const fakeData: FakeRecipe[] = [
//   {
//     title: "Shrimp and Chorizo Paella",
//     username: "Sheppie",
//     date: "November 4, 2022",
//     image:
//       "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2000%2F05%2F01%2F0867_180612_DuPree_MyRecipe_Traditional20Spanish20Paella_699620copy-2000.jpg",
//     description:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//   },
//   {
//     title: "Roast Chicken and Potatoes",
//     username: "Georgie",
//     date: "November 10, 2022",
//     image:
//       "https://www.gimmesomeoven.com/wp-content/uploads/2015/05/Oven-Baked-Chicken-Breast-Recipe-4-1-1100x1650.jpg",
//     description:
//       "This oven baked chicken will knock the socks off the family at dinner tonight.  It is complimented with a side of roast potatoes that are a perfect blend of crispy and soft.  Add a creamy, garlicly caesar if you really want to make the perfect meal.",
//   },
//   {
//     title: "Glazed Doughnuts",
//     username: "Morgan",
//     date: "November 1st, 2022",
//     image:
//       "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/how-to-make-homemade-glazed-doughnuts.jpg",
//     description:
//       "homemade doughnuts - fried, sugary, old-fashioned, and comforting. It's so much fun to be able to make them from scratch without leaving the comforts of home.",
//   },
// ];

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.recipe.deleteMany();
  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
