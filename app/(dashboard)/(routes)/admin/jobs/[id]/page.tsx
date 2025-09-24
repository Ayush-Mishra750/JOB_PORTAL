import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import JobPublishAction from "./_components/job-publish-action";
import { Banner } from "@/components/ui/banner";
import { TitleForm } from "./_components/title-form";
import CategoryForm from "./_components/category-form";
// import { TagsForm } from "./_components/Tags-Form";

const JobDetailsPage = async ({ params }: { params: {id: string } }) => {
  // Verify the MongoDB ObjectId
  const validObjectIdRegex = /^[0-9a-fA-F]{24}$/;
  if (!validObjectIdRegex.test(params.id)) {
    redirect("/admin/jobs");
  }
  

  const { userId } = await auth();
  if (!userId) {
   return  redirect("/");
  }

  // Fetch job
  const job = await db.job.findUnique({
    where: {
      id: params.id,
      userId,
    },
  });
  const categories=await db.category.findMany({
    orderBy:{name:"asc"},
  })

  if (!job) {
   return  redirect(`/admin/jobs`);
  }

  // Check required fields
  const requiredFields = [job.title, job.description, job.image_Url];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="p-5">
      <Link href={"/admin/jobs"}>
        <div className="flex items-center text-neutral-500">
          <ArrowLeft className="w-4 h-4 object-cover rounded-full" />
          Back
        </div>
      </Link>

      {/* Title */}
      <div className="flex items-center justify-between my-4">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Job Setup</h1>
          <span className="text-sm text-neutral-500">
            Complete All fields {completionText}
          </span>
        </div>

        {/* Action button */}
        <JobPublishAction
          jobId={params.id}
          isPublished={job.isPublished}
          disabled={!isComplete}
        />
      </div>

      {/* Warning banner */}
      {!job.isPublished && (
        <Banner
          variant="success"
          label="This Job is UnPublished. It will not be visible in the jobs list"
        />
      )}

      {/* Container layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <Sparkles />
            <h2 className="text-xl text-neutral-700">Customize your job</h2>
          </div>
          <TitleForm initialData={job.title} jobId={params.id} userId={userId} />

          {/* category form  */}
          <CategoryForm/>
        </div>

        
       
      </div>
    </div>
  );
};

export default JobDetailsPage;
