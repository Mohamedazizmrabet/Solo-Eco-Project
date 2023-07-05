const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

 async function add(data:item) {
  try {
    const createdUser = await prisma.user.create({
      data: data,
    });
    console.log(createdUser);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
export {add}
