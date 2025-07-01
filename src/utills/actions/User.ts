"use server";
import { PrismaClient } from '@prisma/client'





// Initialize Prisma Client properly
const prisma = new PrismaClient();

export async function createUserAction() {
  try {
    const user = await prisma.user.create({
      data: { 
        name: "deepak",
        email: "deepak@gmail.com",
      },
    });
    console.log(user);
    return "user created";
  } catch (error) {
    console.error(error);
    return "something went wrong";
  } finally {
    await prisma.$disconnect();
  }
}



export async function getUserAction(){
    try {
        const users = await prisma.user.findMany();
        console.log(users)
        return users
    } catch  {
        return []
    }
}