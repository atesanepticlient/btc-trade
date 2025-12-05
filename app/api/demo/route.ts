import { prisma } from "@/src/lib/prisma";

export async function POST() {
  try {
    const adjustment = 2000;

    // Record the price adjustment
    const updated = await prisma.user.update({
<<<<<<< HEAD
      where:{
        email:"editzsam305@gmail.com"
      },
      data: {
        role:"ADMIN",
=======
      where: { email: "ma@ma.ma" },
      data: {
        role: "ADMIN",
>>>>>>> 6e96554fd31c3a358adaa7a38b84517eabbd44c4
      },
    });
    return Response.json({
      success: true,
<<<<<<< HEAD
      updated,
=======
      updated
>>>>>>> 6e96554fd31c3a358adaa7a38b84517eabbd44c4
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      success: false,
    });
  }
}
