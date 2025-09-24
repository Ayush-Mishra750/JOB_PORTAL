"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";



export const CreateJobTitle = async (data:{title:string}) => {
  const {title}=data
  try {
    const { userId } = await auth();
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
    return job;
  } catch (error) {
    console.log("kya hua");
    console.log(`[JOB_POST]:${error}`);
    return new NextResponse("internal server error", { status: 500 });
  }
};



export async function updateJobTitle(jobId: string, title: string) {
 
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!jobId) {
    throw new Error("Job ID is missing");
  }

  const job = await db.job.update({
    where: {
      id: jobId,
      userId,
    },
    data: {
      title,
    },
  });

  revalidatePath("/admin/jobs"); // revalidate UI

  return job;
}
