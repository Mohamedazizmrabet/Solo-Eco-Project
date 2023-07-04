const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

const addUser = async (user) => {
  const addedUser = await prisma.user.create({
    data: user,
  });
  return addedUser;
};

module.exports = { prisma, getUsers, addUser };
