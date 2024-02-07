import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'




const prisma = new PrismaClient()

const userData = [
    {
      userName: 'x',
      email: 'x@test.io',
      password: 'test'
    },
    {
      userName: 'y',
      email: 'y@test.io',
      password: 'toast'
    },
  ]


  async function main() {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const password = await hash('test', 12)
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })