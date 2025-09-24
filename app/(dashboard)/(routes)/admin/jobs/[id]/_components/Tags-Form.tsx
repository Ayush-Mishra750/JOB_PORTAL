"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

interface TagsFormProps{
    tags:string
}

// const formSchema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
// });

export const TagsForm = ({ tags }: TagsFormProps) => {
   const [isTags,setTags]=useState(true)

  return (
    <div className="mt-6 border bg-neutral-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Job Title
        <Button variant="ghost" >
          {isTags ? "Cancel" : <><Pencil className="h-4 w-4 mr-2" /> Edit Tags</>}
        </Button>
      </div>

      {!isTags && <p className="text-sm mt-2">{ "enter Tags"}</p>}

      {isTags && (
       <div>enter tags</div>
      )}

      <div>


      </div>
    </div>
  );
};

