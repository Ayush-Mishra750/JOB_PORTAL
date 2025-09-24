"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn helper

// Banner styles with variants
const bannerVariants = cva(
  "border text-center p-4 text-sm flex items-center w-full rounded-md shadow-md gap-2",
  {
    variants: {
      variant: {
        warning:
          "bg-yellow-200/80 border-yellow-300 text-yellow-900",
        success:
          "bg-emerald-700/80 border-emerald-300 text-white",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);

// Icon mapping for variants
const iconMap = {
  warning: AlertTriangle,
  success: CheckCircle,
};

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}

export const Banner = ({ variant, label }: BannerProps) => {
  const Icon = iconMap[variant || "warning"];
  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
};
