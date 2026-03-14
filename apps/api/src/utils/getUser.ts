import { prisma } from "@wordpressclone/db";

export async function getUser(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        clerkId: id
      }
    })

    return user
  } catch (error) {
    console.log(error);
    
  }
}