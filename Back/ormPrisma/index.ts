const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

 async function addUser (user) {
  const addedUser = await prisma.user.create(
    {
    data: user
  }
  );
  return addedUser;
};

async function getOneUser(userName){
 const oneUser=await prisma.user.findUnique({
  where:{
    username:userName,
  }
 })
 return oneUser
}
module.exports = { prisma, getUsers, addUser,getOneUser };
