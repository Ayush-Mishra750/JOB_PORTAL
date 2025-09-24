import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
  try {
    const { userId } = await auth();
    const { title } = await req.json();
    console.log(title);

    if (!userId) {
      return new NextResponse("Un-authorized", { status: 401 });
    }
    if (!title) {
      return new NextResponse("Title is missing", { status: 401 });
    }
    const job = await db.job.create({
      data: { userId, title },
    });
    console.log(job);
    return NextResponse.json(job);
  } catch (error) {
    console.log("kya hua");
    console.log(`[JOB_POST]:${error}`);
    return new NextResponse("internal server error", { status: 500 });
  }
};
