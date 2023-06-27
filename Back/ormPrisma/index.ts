import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers=await prisma.user.findMany() 
//   console.log(allUsers);
    
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
async function add(){
  const addUsers = await prisma.user.create({
    data: {
      username: 'Alice',
      email: 'alice@prisma.io',
      password:'14785',
      phoneN:"12345678"
    
    },
  } )
  console.log(addUsers);
  
}
add().then(async()=>{
  await prisma.$disconnect()
}).catch(async(err)=>{
  console.log(err);
  await prisma.$disconnect()
  process.exit(1)
  
})

