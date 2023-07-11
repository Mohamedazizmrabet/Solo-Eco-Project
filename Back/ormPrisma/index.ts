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

async function getOneUser(userName,password){
  console.log(userName,password,"from prisma");
  
 const oneUser=await prisma.user.findUnique({
  where:{
    username:userName,
    
  }
 })
 if(oneUser.password===password) return oneUser
 else  throw new Error("user is not found");
}
module.exports = { prisma, getUsers, addUser,getOneUser };
