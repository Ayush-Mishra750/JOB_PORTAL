"use client";

import { updateJobTitle } from "@/actions/job";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
// import { title } from "process";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";



interface TitleFormProps {
  initialData: { title: string };
  jobId: string;
  userId:string
}

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});

export const TitleForm = ({ initialData, jobId,userId }: TitleFormProps) => {
  const {title}=initialData
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
// console.log(initialData)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const { isValid  } = form.formState;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values.title)
    startTransition(async () => {
      try {
        await updateJobTitle(jobId, values.title);
        toast.success("Job updated successfully!");
        toggleEditing();
        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      }
    });
  };

  const toggleEditing = () => setIsEditing((prev) => !prev);

  return (
    <div className="mt-6 border bg-neutral-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Job Title
        <Button variant="ghost" onClick={toggleEditing}>
          {isEditing ? "Cancel" : <><Pencil className="h-4 w-4 mr-2" /> Edit Title</>}
        </Button>
      </div>

      {!isEditing && <p className="text-sm mt-2">{initialData}</p>}

      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      placeholder="e.g. Full Stack Developer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isPending} type="submit">
                {isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
