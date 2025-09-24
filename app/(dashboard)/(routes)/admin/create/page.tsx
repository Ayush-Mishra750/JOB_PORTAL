"use client";

import React, { startTransition, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { CreateJobTitle } from "@/actions/job";

//  Validation Schema
const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "At least 2 characters required" })
    .max(50, { message: "Max 50 characters allowed" })
    .refine((val) => !/^\d+$/.test(val), {
      message: "Job title cannot be only numbers",
    }),
});

const CreateJob = () => {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "title",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        const job = await CreateJobTitle(values);
        console.log(job)
        toast.success("Job created successfully");
        router.push(`/admin/jobs/${job.id}`);
      } catch (error) {
        console.error("Server Error:", error);
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-fixed px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 border animate-fadeIn">
        <h1 className="font-bold text-xl">Name your Job</h1>
        <p className="mt-2 text-gray-600">
          What would you like to name your job?
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-6"
          >
            {/* Job Title Field */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. 'Full Stack Web Developer'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    This will be your job’s public name.
                  </FormDescription>
                </FormItem>
              )}
            />

            {/* Actions */}
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/admin/jobs")}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isLoading || !form.watch("title")}
              >
                {isLoading ? "Submitting..." : "Continue"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateJob;
