import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // shadcn helper
import { LucideIcon } from "lucide-react";

const backgroundVarient=cva("rounded-full flex items-center justify-center",
  {
     variants: {
    variant: {
      default: "bg-purple-100",
      success: "bg-emerald-100",
    },
    size: {
      default: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
  }
)
